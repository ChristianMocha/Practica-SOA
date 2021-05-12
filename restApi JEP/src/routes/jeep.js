const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const jeeps = require('../routes/Jeep.json');

// get
router.get('/', (req, res) => {
    res.json(jeeps);
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
        res.status(200).send('OK')
        // res.status(ok);
        // res.send(pichincha);
    }else{
        res.status(500).json({error: "There was an error."})
    }
})



module.exports = router;