// TODO: Crear modelo de datos de Reserva

//const {sequelize, dataTypes} = require("../models/server/tlp1-segundo-trabajo/database");
const { sequelize, dataTypes } = require("./database");

const reserva = sequelize.define("reserva", {
  usuario: {
    type: dataTypes.STRING,
    allowNull: true,
  },
  reserva: {
    type: dataTypes.STRING,
    allpwNull: true,
  },

  codigo: {
    type: dataTypes.INTEGER,
    allowNull: false,
  },

  fecha: {
    type: dataTypes.DATE,
    allowNull: true,
  },
});

comentario.sync();

module.exports = reserva;
