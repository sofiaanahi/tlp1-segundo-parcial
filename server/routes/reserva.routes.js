// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();

const {
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

router.get("/usuario/", async (req, res) => {
  return res.render("reserva/lista_reserva");
});

// Formulario para crear una reserva

router.get("/usuario/nueva_reserva", async (req, res) => {
  return res.render("reservas/nuevas");
});

// Formulario para actualizar una reserva

router.get("/usuario/editar_reserva/:userId"),
  async (req, res) => {
    return res.render("usuario/editar_reserva", { id: req.params.userId });
  };

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api/usuario/lista_reserva", obtenerReserva);

// Crear una reserva
router.post("/api/usuario/nueva_reserva", crearReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

module.exports = router;
