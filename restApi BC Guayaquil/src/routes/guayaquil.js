const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const guayaquil = require('./guayaquil.json');

// get
router.get('/', (req, res) => {
    res.json(guayaquil);
})



// update
router.put('/:id', (req, res) => {
    // const {id} = req.params;
    const {cuenta} = req.body;
    const {precio} = req.body;
    console.log('guayaquil', cuenta);

    
    if (cuenta && precio){
        _.each(guayaquil, (guayas, i) => {
            if(guayas.cuenta == cuenta){
                
                if(guayas.saldo < precio){
                    res.status(500).json({error: "No tiene suficiente dinero :P"})
                }else{
                    const total = guayas.saldo - precio;
                    guayas.saldo = total;
                }  
            }
        });
        console.log('guayaquil', guayaquil);
        res.status(200).send('OK')
        // res.status(ok);
        // res.send(guayaquil);
    }else{
        res.status(500).json({error: "There was an error."})
    }
})



module.exports = router;