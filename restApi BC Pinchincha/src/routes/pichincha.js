const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const pichincha = require('../routes/pichincha.json');
console.log(pichincha);

// get
router.get('/', (req, res) => {
    res.json(pichincha);
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

    
    if (cuenta && precio){
        _.each(pichincha, (pichin, i) => {
            if(pichin.cuenta == cuenta){
                
                if(pichin.saldo < precio){
                    res.status(500).json({error: "No tiene suficiente money haga una recarga :P"})
                }else{
                    const total = pichin.saldo - precio;
                    pichin.saldo = total;
                }  
            }
        });
        console.log('pichinnchaaa', pichincha);
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