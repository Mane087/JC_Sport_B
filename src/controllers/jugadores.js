const pool = require("../database/conecxion.js").pool;
const jwt = require("jsonwebtoken");

const loginUser = async (user , password) => {
  if (!user || !password) {
    console.error("Username or password is undefined or empty!");
    return null;
  }

  try {
    const connection = await pool.getConnection();

    try {
      const [users] = await connection.query(
        "SELECT * FROM jugadores WHERE numeroJugador = ?",
        [user ]
      );

      if (users.length === 0) return null;
      
      const player = users[0];
      const token = validationJwToken(player);
      return token;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error during login:", error);
    console.log(error);
    return null;
  }
};

function validationJwToken(player) {
  const payload = {
    user: player.nombre,
    number: player.numeroJugador, // o admin.user si tu propiedad se llama user
    role: player.role // incluir el role en el payload del token
};
return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1m",
});
}

const userExists = async (user) => {
  if (!user) {
    console.error("Username is undefined or empty!");
    return false;
  }

  try {
    const connection = await pool.getConnection();

    try {
      const [users] = await connection.query(
        "SELECT * FROM jugadores WHERE numeroJugador = ?",
        [user]
      );
      return users.length > 0;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error during user existence check:", error);
    console.log(error);
    return false;
  }
};

const getAllJugadores = async (idEquipo) => {
  if (!idEquipo) {
    console.error("Username is undefined or empty!");
    return false;
  }

  try {
    const connection = await pool.getConnection();

    try {
      const [users] = await connection.query(
        "SELECT *  FROM jugadores WHERE idEquipo = ?",
        [idEquipo]
      );
      return users;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error during user existence check:", error);
    console.log(error);
    return false;
  }
}

const getJugador = async (idJugador) => {
  if (!idJugador) {
    console.error("Username is undefined or empty!");
    return false;
  }

  try {
    const connection = await pool.getConnection();

    try {
      const [users] = await connection.query(
        "SELECT jugadores.*, equipos.nombre AS nombre_equipo, equipos.localidad, DATE_FORMAT(jugadores.fechaNacimiento, '%Y-%m-%d') AS fechaNacimientoFormateada FROM jugadores INNER JOIN equipos ON jugadores.idEquipo = equipos.idEquipo WHERE jugadores.numeroJugador = ? ",
        [idJugador]
      );
      return users;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error during user existence check:", error);
    console.log(error);
    return false;
  }
}

module.exports = { loginUser, userExists, getAllJugadores, getJugador };
