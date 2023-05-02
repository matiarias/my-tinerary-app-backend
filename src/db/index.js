const mongoose = require("mongoose");

const url =
  "mongodb+srv://matiasarias:kzSiImRfGuyFjMCt@cluster0.mx1plao.mongodb.net/?retryWrites=true&w=majority";

async function conectarDB() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("se conecto a la base de datos de mongoDB");
    })
    .catch((error) => {
      console.log("error al conectar a la base de datos", error);
    });
}

module.exports = conectarDB;
