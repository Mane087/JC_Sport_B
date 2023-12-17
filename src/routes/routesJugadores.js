const express = require("express");
const router = express.Router();
const tabla_jugadores = require("../controllers/jugadores.js");

router.post("/login", async (req, res) => {
  const { user, password } = req.body;

  try {
    const token = await tabla_jugadores.loginUser(user, password);
    console.log(token);
    if (!token) {
      const userExists = await tabla_jugadores.userExists(user); // Asume que tienes un método userExists
      if (userExists) {
        return res.status(400).send("Invalid password.");
      } else {
        return res.status(400).send("The user does not exist.");
      }
    }
    res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in.");
    console.log(error);
  }
});

router.get("/jugadores/:idEquipo", async (req, res) => {
  try {
    const idEquipo = req.params.idEquipo; // Obtén el ID del parámetro de la URL
    const jugadores = await tabla_jugadores.getAllJugadores(idEquipo); // Pasa el ID a la función
    res.json(jugadores);
  } catch (error) {
    console.error(error);
    res.status(400).send("An error occurred while retrieving players.");
    res.status(500).send("An error occurred while retrieving users.");
  }
});

router.get("/jugador/:idJugador", async (req, res) => {
  try {
    const idJugador = req.params.idJugador;
    const jugadores = await tabla_jugadores.getJugador(idJugador); // Pasa el ID a la función
    res.json(jugadores);
  } catch (error) {
    console.error(error);
    res.status(400).send("An error occurred while retrieving players.");
    res.status(500).send("An error occurred while retrieving users.");
  }
});

router.post("/addJugador", async (req, res) => {
  const {
    numeroJugador,
    foto,
    nombre,
    fechaNacimiento,
    domicilio,
    telefono,
    estatura,
    peso,
    idEquipo,
    posicion,
    partidosJugados,
    goles,
    autogoles,
    tarjetasAmarillas,
    tarjetasRojas,
    contraseña,
    role,
  } = req.body;

  const jugador = {
    numeroJugador,
    foto,
    nombre,
    fechaNacimiento,
    domicilio,
    telefono,
    estatura,
    peso,
    idEquipo,
    posicion,
    partidosJugados,
    goles,
    autogoles,
    tarjetasAmarillas,
    tarjetasRojas,
    contraseña,
    role,
  };

  try {
    const result = await tabla_jugadores.addJugador(jugador);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding a new player.");
  }
});

router.post("/registerPT", async (req, res) => {
  const {
    numeroJugador,
    fechaPT,
    velocidad,
    coordinacion,
    dominioBalon,
    autoPase,
    conduccion,
    remateCabeza,
    despeje,
    tiroPenal,
    Recepcion,
    Resistencia,
  } = req.body;

  const pruebaTecnica = {
    numeroJugador,
    fechaPT,
    velocidad,
    coordinacion,
    dominioBalon,
    autoPase,
    conduccion,
    remateCabeza,
    despeje,
    tiroPenal,
    Recepcion,
    Resistencia,
  };

  try {
    const result = await tabla_jugadores.registerPT(pruebaTecnica);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding a new player.");
  }
});

router.get("/getDataPT/:idJugador", async (req, res) => {
  try {
    const idJugador = req.params.idJugador;
    const pruebaTecnica = await tabla_jugadores.getDataPT(idJugador); 
    res.json(pruebaTecnica);
  } catch (error) {
    console.error(error);
    res.status(400).send("An error occurred while retrieving players.");
    res.status(500).send("An error occurred while retrieving users.");
  }
});

module.exports = router;
