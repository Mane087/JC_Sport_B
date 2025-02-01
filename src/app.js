require('dotenv').config();
const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3000;
const routes_Jugadores = require('./routes/routesJugadores.js');
const routes_Admin = require('./routes/routesAdmin.js');
const routesEquipos = require('./routes/routesEquipos.js');
const routeMail = require('./routes/routesMail.js')

app.get('/', function (req, res) {
  res.send('Hello World!');
});


const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000', 'https://jfc-b-production.up.railway.app', 'http://localhost:8080', 'https://jc-sportclub.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  const allowedOrigins = ['https://jc-sportclub.com', 'http://localhost:8080']; 
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes_Jugadores);

app.use('/api', routes_Admin);

app.use('/api', routesEquipos);

app.use('/api', routeMail);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`); 
});
