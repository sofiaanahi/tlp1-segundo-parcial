// Imports
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();

const { sequelize } = require("../tlp1-segundo-parcial/db");

sequelize

  .then(() => console.log("Conexion a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

require("ejs");

const port = process.env.PORT || 2080;

const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./server/routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res, next) => {
  res.write(`<h1>400 - Ruta no encontrada </h1>`);
});

// Starting the server
app.listen(port, console.log(`Server on port ${port}`));
