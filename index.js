const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hola mi serve en express");
});
app.get('/nueva-ruta', (req, res) => {
    res.send("Nueva ruta");
});
app.get('/products', (req, res) => {
    res.json([
        {
            name: 'Product 1',
            price: 100
        },
        {
            name: 'Product 2',
            price: 2000
        }
    ]);
});
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Product 2',
        price: 2000
    });
});

app.listen(port, () => {
    console.log("Mi port " + port);
});