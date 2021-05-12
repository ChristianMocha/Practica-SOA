const { Router } = require('express');
const router = Router();
const fetch = require ('node-fetch');

// get
router.get('/', async (req, res) => {
    const response = await fetch('http://localhost:3000/api/cars');
    const cars = await response.json();
    res.json(cars);
})






module.exports = router;