const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
