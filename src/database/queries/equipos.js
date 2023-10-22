const pool = require("../conecxion.js").pool;

const getAllEquipos = async () => {
  try {
    const connection = await pool.getConnection();

    try {
      const [equipos] = await connection.query("SELECT * FROM equipos");
      return equipos;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(error);
  }
};

const getEquipo = async (id) => {
  try {
    const connection = await pool.getConnection();

    try {
      const [equipos] = await connection.query(
        "SELECT * FROM equipos WHERE id = ?",
        [id]
      );
      return equipos;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(error);
  }
};

const createEquipo = async (equipo) => {
    try {
        const connection = await pool.getConnection();
    
        try {
        const [equipos] = await connection.query(
            "INSERT INTO equipos (nombre, localidad ,logo) VALUES (?, ?, ?)",
            [equipo.nombre, equipo.localidad, equipo.logo]
        );
        return equipos;
        } finally {
        connection.release();
        }
    } catch (error) {
        console.error(error);
    }
}

const updateEquipo = async (equipo) => {
    try {
        const connection = await pool.getConnection();
    
        try {
        const [equipos] = await connection.query(
            "UPDATE equipos SET nombre = ?, logo = ?, idLiga = ? WHERE id = ?",
            [equipo.nombre, equipo.logo, equipo.idLiga, equipo.id]
        );
        return equipos;
        } finally {
        connection.release();
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteEquipo = async (id) => {
    try {
        const connection = await pool.getConnection();
    
        try {
        const [equipos] = await connection.query(
            "DELETE FROM equipos WHERE id = ?",
            [id]
        );
        return equipos;
        } finally {
        connection.release();
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAllEquipos, getEquipo, createEquipo, updateEquipo, deleteEquipo };
