const express = require("express");
const router = express.Router(); // Aquí se crea una nueva instancia de Router

const formController = require("../controllers/dataController");

// Define la ruta POST y el controlador correspondiente
router.post("/", formController.getData);

module.exports = router;
