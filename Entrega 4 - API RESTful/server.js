const express = require('express');
const productos = require('./modulos/productos');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos',productos);

app.use('/crear', express.static(__dirname + '/public/index.html'))
app.use('/borrar', express.static(__dirname + '/public/delete.html'))

app.listen(8080, () => console.log('Servidor OK puerto 8080'));