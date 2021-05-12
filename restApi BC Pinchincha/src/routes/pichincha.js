const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const pichincha = require('../routes/pichincha.json');

// get
router.get('/', (req, res) => {
    res.json(pichincha);
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
        res.status(200).send('OK')
        // res.status(ok);
        // res.send(pichincha);
    }else{
        res.status(500).json({error: "There was an error."})
    }
})



module.exports = router;