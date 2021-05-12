const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');
const fetch = require ('node-fetch');

const jeeps = require('../routes/Jeep.json');

// get
router.get('/', (req, res) => {
    res.json(jeeps);
})

// post
router.post('/', (req, res) => {
    const {balance, userName } = req.body;

    if (balance && userName){
        const id = movies.length + 1;

        const newMovie = {...req.body, id};

        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error: "There was an error."})
    }
})

// update
router.put('/:id', (req, res) => {
    // const {id} = req.params;
    const {cuenta} = req.body;
    const {precio} = req.body;

    console.log('cuentaaaa', cuenta, precio);
    
    if (cuenta && precio){
        _.each(jeeps, (jep, i) => {
            if(jep.cuenta == cuenta){
                const total = jep.saldo + precio;
                jep.saldo = total; 
            }
        });
        console.log('jeppp', jeeps);
        // res.json('OK');
        res.status(200).send('OK')
        // res.status(ok);
        // res.send(pichincha);
    }else{
        res.status(500).json({error: "There was an error."})
    }
})

// delete
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
})

module.exports = router;