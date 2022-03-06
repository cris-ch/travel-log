const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require('multer');
const PORT = 5000;

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.API_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  // Add image
  const storage = multer.diskStorage({
    destination:(req, file, callback) => {
      callback(null, "images")
    },
    filename: (req, file, callback) => {
      callback(null, req.body.name)
    }
  })

  const upload = multer({storage})
  app.post("api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded")
  })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
