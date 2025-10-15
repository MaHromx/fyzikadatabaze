const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// složka pro nahrané soubory
const uploadFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// Multer konfigurace
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// frontend soubory
app.use(express.static(path.join(__dirname, "public")));

// nahrávání souboru
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  res.redirect("/"); // po nahrání se vrátí na hlavní stránku
});

// seznam souborů
app.get("/files", (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) return res.status(500).send("Error reading files");
    const fileList = files.map(f => ({
      name: f,
      url: "/uploads/" + f
    }));
    res.json(fileList);
  });
});

// složka uploads staticky dostupná
app.use("/uploads", express.static(uploadFolder));

app.listen(PORT, () => console.log(`Server běží na portu ${PORT}`));

