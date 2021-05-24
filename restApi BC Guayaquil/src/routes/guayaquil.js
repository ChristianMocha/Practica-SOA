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
    let total = 0;

    
    if (cuenta && precio){
        _.each(guayaquil, (guayas, i) => {
            if(guayas.cuenta == cuenta){
                
                if(guayas.saldo < precio){
                    res.status(500).json({error: "No tiene suficiente dinero :P"})
                }else{
                    total = guayas.saldo - precio;
                    guayas.saldo = total;
                }  
            }
        });
        if(total != 0){
            res.status(200).send('OK')
            console.log('guayaquil', guayaquil);
        }else{

            res.status(500).json({error: "Account not found."})
        }
    }else{
        res.status(500).json({error: "There was an error."})
    }
})



module.exports = router;