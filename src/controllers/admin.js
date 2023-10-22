const pool = require("../database/conecxion.js").pool;
const jwt = require("jsonwebtoken");

const loginAdmin = async (user, password) => {
  if (!user || !password) {
    console.error("Username or password is undefined or empty!");
    return null;
  }

  try {
    const connection = await pool.getConnection();

    try {
      const [users] = await connection.query(
        "SELECT * FROM admin WHERE usuario = ?",
        [user]
      );

      if (users.length === 0) return null;

      const admin = users[0];
      const token = validationJwToken(admin);
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

function validationJwToken(admin) {
  const payload = {
    user: admin.usuario, // o admin.user si tu propiedad se llama user
    role: admin.role, // incluir el role en el payload del token
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
        "SELECT * FROM admin WHERE usuario = ?",
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

// addPlayer
// deletePlayer
// updatePlayer
// getPlayer
// getAllPlayers


const getAllPlayers = async () => {
  try {
    const connection = await pool.getConnection();
    try {
      const [players] = await connection.query("SELECT * FROM jugadores");
      return players;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error during user existence check:", error);
    console.log(error);
    return false;
  }
};

module.exports = { loginAdmin, userExists };
