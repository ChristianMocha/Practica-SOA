const { Router } = require('express');
const { restart } = require('nodemon');
const router = Router();
const _ = require('underscore');

const movies = require('../routes/sample.json');
console.log(movies);

// get
// router.get('/', (req, res) => {
//     res.json(movies);
// })

// post
// router.post('/', (req, res) => {
//     const {balance, userName } = req.body;

//     if (balance && userName){
//         const id = movies.length + 1;

//         const newMovie = {...req.body, id};

//         movies.push(newMovie);
//         res.json(movies);
//     }else{
//         res.status(500).json({error: "There was an error."})
//     }
// })

// update
// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     const {balance, userName } = req.body;
//     if (balance && userName){
//         _.each(movies, (movie, i) => {
//             if(movie.id == id){
//                 movie.balance = balance;
//                 movie.userName = userName;
                
//             }
//         });
//         res.json(movies);
//     }else{
//         res.status(500).json({error: "There was an error."})
//     }
// })

// delete
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     _.each(movies, (movie, i) => {
//         if(movie.id == id){
//             movies.splice(i, 1);
//         }
//     });
//     res.send(movies);
// })

module.exports = router;