let http = require('http')
const SERVER_PORT = 8089

var server = http.createServer((req, red) =>{
    console.log(req)
}).listen[SERVER_PORT]

console.log('Server running' + SERVER_PORT)

const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

/*let server = app.listen(8089, ()=>{
    let host = server.address().host
    let port = server.address().port
    console.log("Server running at http://%s:%s ", host)
})*/

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Express JS');
})


app.get('/name', function(req, res) {
    res.send({ "firstname":"Kazi", "lastname": "Safa" });
})
//use Postman
app.post('/name', function(req, res) {
    res.send({ "firstname":"Kazi", "lastname": "Safa" });
})


app.post('/name', (req, res) => {
    console.log('Got body:', req.body);
    res.send(req.body);
    res.sendStatus(200);
});


