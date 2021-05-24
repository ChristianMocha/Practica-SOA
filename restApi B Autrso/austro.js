const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const austro = require('./austro.json');

// get
router.get('/', (req, res) => {
    res.json(austro);
})



// update
router.put('/:id', (req, res) => {
    // const {id} = req.params;
    const {cuenta} = req.body;
    const {precio} = req.body;
    // console.log(cuenta, "cuenta austro")
    let total=0;
    if (cuenta && precio){
        _.each(austro, (aus, i) => {
            if(aus.cuenta == cuenta){
                if(aus.saldo < precio){
                    res.status(500).json({error: "No tiene suficiente money haga una recarga :P"})
                }else{
                    total = aus.saldo - precio;
                    aus.saldo = total;
                    console.log(total)
                }  
            }
        });
        if (total != 0){
            console.log('Austro', austro);
            res.status(200).send("ok");
        }else{
            console.log( 'Account not found' );
            res.status(500).send({erro:"account not found"});
        }// res.send(austro);
    }else{
        console.log( 'There was an error' );
        res.status(500).json({error: "There was an error."})
    }
})



module.exports = router;