const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');
const fetch = require ('node-fetch');

const cars = require('../routes/cars.json');

// get
// router.get('/', (req, res) => {
//     res.json(cars);
// })

// post
// router.post('/', (req, res) => {
//     const {cuentaPropietario, modelo } = req.body;

//     if (cuentaPropietario && modelo){
//         const id = cars.length + 1;

//         const newCar = {...req.body, id};

//         cars.push(newCar);
//         res.json(cars);
//     }else{
//         res.status(500).json({error: "There was an error."})
//     }
// })

// post bancos
router.post('/:cuenta', (req, res) => {
    const {cuenta} = req.params;
    const precio = 5;
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

// update
// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     const {cuentaPropietario, modelo } = req.body;

//     if (cuentaPropietario && modelo){
//         _.each(cars, (car, i) => {
//             if(car.id == id){
//                 car.cuentaPropietario = cuentaPropietario;
//                 car.modelo = modelo;
                
//             }
//         });
//         res.json(cars);
//     }else{
//         res.status(500).json({error: "There was an error."})
//     }
// })

// delete
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     _.each(cars, (car, i) => {
//         if(car.id == id){
//             cars.splice(i, 1);
//         }
//     });
//     res.send(cars);
// })

module.exports = router;