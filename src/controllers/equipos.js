const pool = require("../database/conecxion.js").pool;

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

const getEquipo = async (idEquipo) => {
  try {
    const connection = await pool.getConnection();

    try {
      const [equipos] = await connection.query(
        "SELECT * FROM equipos WHERE idEquipo = ?",
        [idEquipo]
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
            "UPDATE equipos SET nombre = ?, localidad = ? ,logo = ? WHERE idEquipo = ?",
            [equipo.nombre, equipo.localidad ,equipo.logo, equipo.idEquipo]
        );
        return { status: 'OK', message: 'Equipo actulizado correctamente' };
        } finally {
        connection.release();
        }
    } catch (error) {
        console.error(error);
    }
}

const deleteEquipo = async (idEquipo) => {
  try {
      const connection = await pool.getConnection();
  
      try {
          const result = await connection.query(
              "DELETE FROM equipos WHERE idEquipo = ?",
              [idEquipo]
          );
          if (result.affectedRows > 0) {
              
              return { status: 'OK', message: 'Equipo eliminado exitosamente' };
          } else {
              
              return { status: 'ERROR', message: 'No se encontró ningún equipo con ese ID' };
          }
      } finally {
          connection.release();
      }
  } catch (error) {
      console.error(error);
      return { status: 'ERROR', message: 'Error al eliminar el equipo' };
  }
}


module.exports = { getAllEquipos, getEquipo, createEquipo, updateEquipo, deleteEquipo };
