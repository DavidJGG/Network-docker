const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use(cors());

var arr = [{
    nombre: "David",
    edad: "23",
    anio: 1997
},
{
    nombre: "Jonathan",
    edad: "18",
    anio: 2002
},
{
    nombre: "Gabriela",
    edad: "21",
    anio: 1999
},
{
    nombre: "Piter",
    edad: "15",
    anio: 2005
}];

function insertar(el) {
    arr.push(el);
}

app.get('/', (req, res) => {
    res.send('Hola')
})

app.post('/serv', (req, res) => {
    try {
        var nombre = req.body.nombre || "";
        var edad = req.body.edad || "";
        var anio = req.body.anio || "";
        insertar({ nombre: nombre, edad: edad, anio: anio });
        res.status(200).send({ status: 200, msg: "Listo" });
    } catch (err) {
        res.status(201).send({ status: 400, msg: err });
    }
})

app.get('/serv', (req, res) => {
    res.send(arr);
});

app.listen(port, () => {
    console.log(`Escuchando en: ${port}`)
})