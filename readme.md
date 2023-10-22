<!-- JUGADORES -->
-- LOGIN
-- INFORMACION
     mostrar datos generales(numero de jugador,foto,nombre, fecha nacimiento, domicilio, telefono ,estatura, peso, equipo, posicion, minutos jugados, partidos jugados, goles, autogoles, tarjetas amarillas, tarjetas rojas)
     apartado pruebas de rendimiento ???

<!-- ADMIN -->
--LOGIN
--INICIO
    mostrar boton para acceder a los equipos
-- EQUIPOS
    mostrar el listado de equipos y mostrar el CUD
    dentro del create llenar el formulario, el update seleccionar el equipo y llamar al formulario, delete seleccionar al equipo
    doble clik para entrar al equipo abre JUGADORES
--JUGADORES
    mostrar el listado de todos los jugadores, mostrar las opciones de CUD, buscar jugador, filtrar por defecto A-Z
    dentro del create llenar el formulario, el update seleccionar el jugador y llamar al formulario, delete seleccionar al jugador
    buscador jugador que de sugerencias
    prueba tecnica llenar el formulario y generar un grafico en base a los datos
    doble clik para entrar al perfil del jugador
-- PERFIL JUGADOR
    mostrar datos generales(numero de jugador,foto,nombre, fecha nacimiento, domicilio, telefono ,estatura, peso, equipo, posicion, minutos jugados, partidos jugados, goles, autogoles, tarjetas amarillas, tarjetas rojas)
    apartado pruebas de rendimiento ???
    modificar (minutos jugados, partidos jugados, goles, autogoles, tarjetas amarillas, tarjetas rojas)
    agregar prueba tecnica

-- BASE DE DATOS
    jugadores
    numeroJugador int primary key,foto url,nombre varchar(255), fecha nacimiento date , domicilio varchar(40), telefono varchar(10),estatura varchar(5), peso varchar(5), idEquipo int, posicion varchar(40), minutos jugados int, partidos jugados int, goles int, autogoles int, tarjetas amarillas int, tarjetas rojas int
    equipos
    idEquipo int primary key auto, nombre varchar(40), localidad varchar(40)
    pruebasTecnicas 
    admin
    usuario varchar(40) primary key, contrasena varchar(15)