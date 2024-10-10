const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get('/', (req, res) => {
    res.send('Hello from the owner routes');
});

router.post('/create', async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
        return res.status(400).send('Owner already exists');
    }
    let { name, email, password } = req.body;
    let createdOwner = await ownerModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    res.status(201).send(createdOwner);
});

module.exports = router;