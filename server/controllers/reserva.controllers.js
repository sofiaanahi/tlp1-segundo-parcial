const ctrlReservas = {};
const reserva = require("../models/Reserva");

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReserva = async (req, res) => {
  try {
    const reservas = await reserva.findAll({
      where: {
        estado: true,
      },
    });

    if (!reserva || reserva.length === 0) {
      throw {
        status: 404,
        message: "no hay reservas disponibles",
      };
    }

    return res.json(reserva);
  } catch (error) {
    return res.status(error.status || 500).json({
      messenge: error.message || "error interno del servidor",
    });
  }
};

// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrlReservas;
