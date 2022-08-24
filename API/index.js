const cors = require('cors');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

//SERVIDOR

app.listen('4567');

//ROTAS 

app.use(routes);

//CORS

app.use(cors());

//CONFIGURAÇÃO DO BODY PARSER 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONFIGURAÇÃO DA SESSION DO DB

app.use(session({
    secret: 'chavesegredo',
    resave: false,
    saveUninitialized : true
}))













