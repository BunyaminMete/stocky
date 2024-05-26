// controllers/userController.js
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// controllers/userController.js

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Kullanıcılar getirilemedi!", error });
  }
};

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
  const { username, password } = req.body;
  try {
    const users = await User.findByUsername(username);
    if (users.length === 0) {
      return res.status(401).json({ message: "Geçersiz email veya şifre1!" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Geçersiz email veya şifre2!" });
    }

    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, "your_jwt_secret_key", { expiresIn: "1h" });

    res.status(200).json({ message: "Giriş başarılı!", redirect: "/", token });
  } catch (error) {
    res.status(500).json({ message: "Giriş başarısız!", error });
  }
};

exports.isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token not found" });
  }

  const token = authHeader.split(" ")[1]; // 'Bearer token' formatında olduğu varsayılıyor
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

exports.getCurrentUserInfo = async (req, res) => {
  try {
    // Middleware ile doğrulanan kullanıcı bilgileri req.user içinde bulunur.
    const userId = req.user.id; // payload içindeki id'yi kullanarak kullanıcıyı bul
    const users = await User.findById(userId);

    if (users.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı!" });
    }

    const user = users[0];
    res.status(200).json({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kullanıcı bilgileri getirilemedi!", error });
  }
};
