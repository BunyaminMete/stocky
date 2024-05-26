// controllers/userController.js
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ message: "Bu email ile kayıtlı bir kullanıcı zaten var!" });
    }

    const user = new User(username, firstName, lastName, email, password);
    await user.save();
    res.status(201).json({ message: "Kayıt başarılı!" });
  } catch (error) {
    res.status(500).json({ message: "Kayıt başarısız!", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.findByEmail(email);
    if (users.length === 0) {
      return res.status(401).json({ message: "Geçersiz email veya şifre!" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Geçersiz email veya şifre!" });
    }

    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, "your_jwt_secret_key", { expiresIn: "1h" });

    res.status(200).json({ message: "Giriş başarılı!", token });
  } catch (error) {
    res.status(500).json({ message: "Giriş başarısız!", error });
  }
};
