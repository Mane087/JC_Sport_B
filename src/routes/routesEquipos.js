const express = require("express");
const router = express.Router();
const teams = require("../controllers/equipos.js");

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

router.delete("/deleteEquipo/:idEquipo", async (req, res) => {
  const  idEquipo  = req.params.idEquipo;

  try {
    const equipo = await teams.deleteEquipo(idEquipo);
    res.json(equipo);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});

router.get("/getEquipo/:idEquipo", async (req, res) => {
  const idEquipo = req.params.idEquipo;

  try {
    const equipo = await teams.getEquipo(idEquipo);
    res.json(equipo);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});

router.put("/updateEquipo", async (req, res) => {
  const { idEquipo, nombre, localidad, logo } = req.body;

  try {
    const equipo = await teams.updateEquipo({ idEquipo, nombre, localidad, logo });
    res.json(equipo);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});

module.exports = router;