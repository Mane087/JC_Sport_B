const express = require("express");
const router = express.Router();
const teams = require("../database/queries/equipos.js");

router.get("/equipos", async (req, res) => {
  try {
    const equipos = await teams.getAllEquipos();
    res.json(equipos);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});

router.post("/addEquipo", async (req, res) => {
  const { nombre, localidad, logo } = req.body;

  try {
    const equipo = await teams.createEquipo({ nombre, localidad, logo });
    res.json(equipo);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});

module.exports = router;