const cors = require('cors');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');


app.use(cors());

//SERVIDOR

app.listen('4567');


//IMPORTAR MODEL USUARIOS 

const Filmes = require('./models/Filmes');


//CONFIGURAÇÃO DO BODY PARSER 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONFIGURAÇÃO DA SESSION DO DB

app.use(session({
    secret: 'chavesegredo',
    resave: false,
    saveUninitialized : true
}))


//BUSCANDO DADOS DO BANCO E PASSANDO PARA A ROTA 

app.get('/filmes', async (req ,res)=>{
    const filmes = await Filmes.findAll();
    return res.json(filmes);   
})


app.post('/addfilme',(req ,res)=>{

    const id = req.body.id;
    const title = req.body.title;
    const poster_path = req.body.poster_path;
    const vote_average = req.body.vote_average;
    
    Filmes.create({
        id: id,
        title: title,
        poster_path: poster_path,
        vote_average: vote_average,
              
}).then(()=>{
     console.warn('Filme cadastrado com sucesso');
}).catch(()=>{
     console.warn('Ops algo deu errado ...')
}) 
})



