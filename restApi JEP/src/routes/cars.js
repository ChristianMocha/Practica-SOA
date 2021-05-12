const { Router } = require('express');
const router = Router();
const fetch = require ('node-fetch');

// const cars;

router.get('/', async (req, res) => {
    const response = await fetch('http://localhost:3000/api/cars');
    const cars = await response.json();
    res.json(cars);
})

// console.log(this.cars);

module.exports = router;