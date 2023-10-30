require('dotenv').config();
const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3000;
const routes_Jugadores = require('./routes/routesJugadores.js');
const routes_Admin = require('./routes/routesAdmin.js');
const routesEquipos = require('./routes/routesEquipos.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});


const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000', 'https://jfc-b-production.up.railway.app', 'http://localhost:8080', 'https://scintillating-banoffee-7151a2.netlify.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes_Jugadores);

app.use('/api', routes_Admin);

app.use('/api', routesEquipos);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`); 
});
