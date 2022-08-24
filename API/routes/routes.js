const express = require('express');

const routes = express.Router();

const Filmes = require('../models/Filmes');

const cors = require('cors');
const bodyParser = require('body-parser');


routes.use(cors());
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());



routes.get('/filmes', async (req ,res) => {
    const filmes = await Filmes.findAll();
    return res.json(filmes);   
})

routes.post('/addfilme',(req ,res) => {

    const id = req.body.id;
    console.log(req.body.id)
    const title = req.body.title;
    console.log(req.body.title)
    const poster_path = req.body.poster_path;
    console.log(req.body.poster_path)
    const vote_average = req.body.vote_average;
    console.log(req.body.vote_average)
    
    Filmes.create({
        id: id,
        title: title,
        poster_path: poster_path,
        vote_average: vote_average,
        add: "true",
              
}).then(()=>{
     console.warn('Filme cadastrado com sucesso');
}).catch(()=>{
     console.warn('Ops algo deu errado ...')
}) 
})

routes.post('/delfilme',(req ,res) => {

    const id = req.body.id;
    
    Filmes.destroy({
    
    where: {Id : id}
              
}).then(()=>{
     console.warn('Filme deletado com sucesso');
}).catch(()=>{
     console.warn('Ops algo deu errado ...')
}) 
})


module.exports = routes;