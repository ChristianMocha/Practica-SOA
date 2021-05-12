const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');
const fetch = require ('node-fetch');



// post bancos
router.post('/:cuenta', (req, res) => {
    const {cuenta} = req.params;
    const precio = 1;
    const cuentaFinal = 3952;

    if(cuenta && precio){

        fetch(`http://localhost:5000/api/pichincha/${cuenta}`, {
                method: 'PUT',
                body: JSON.stringify({
                    cuenta: cuenta,
                    precio: precio
                }),
                headers: {
                    "Content-type": "application/json"
                }


        }).then(
              response =>{
                console.log("estado de pichinchaa..", response.status)

                if(response.status == 200){
                    fetch(`http://localhost:4000/api/jeep/${cuentaFinal}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            cuenta: cuentaFinal,
                            precio: precio
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(
                        response => { 
                            console.log("estado de jep..", response.status)
                            if(response.status == 200){
                                res.status(200).send('OK')
                            }
                        }
                        )
                    .then(
                        json => console.log("") 
                    )
                }else{
                    res.status(403).send('Forbidden')
                }
            }
        )
          .then(
              json => console.log("")
        )
    }

   
})



module.exports = router;