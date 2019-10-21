let express = require ('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

let Animal = require('./Animal');

let arrayAnimales = [];


app.post('/animales/', function(req,res){
    let nombre = req.body.nombre_animal;
    let origen = req.body.origen;

    let animal = new Animal(nombre, origen);
    arrayAnimales.push(animal);
   
    texto='ok'; 
    res.send (texto);
}
);

app.get('/animales', function(req, res) {
    res.send(arrayAnimales);
})

app.listen(3000);