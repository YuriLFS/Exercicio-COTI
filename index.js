const express = require('express');
const app = express();

let produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00, quantidade: 10 },
    { id: 2, nome: "Mouse Gamer", preco: 150.00, quantidade: 15 },
    { id: 3, nome: "Monitor 24 Polegadas", preco: 900.00, quantidade: 5 },
    { id: 4, nome: "Headset Gamer", preco: 300.00, quantidade: 8 },
    { id: 5, nome: "Webcam Full HD", preco: 200.00, quantidade: 12 },
    { id: 6, nome: "Notebook i5", preco: 3500.00, quantidade: 3 },
    { id: 7, nome: "Cadeira Gamer", preco: 1200.00, quantidade: 4 },
    { id: 8, nome: "SSD 1TB", preco: 500.00, quantidade: 7 },
    { id: 9, nome: "Memória RAM 16GB", preco: 400.00, quantidade: 9 },
    { id: 10, nome: "Placa de Vídeo GTX 1660", preco: 1800.00, quantidade: 2 }
];

app.get('/api/produtos', (req, res) => {
    res.json(produtos);
})

app.listen(3000, () =>{
    console.log('Execuntando na porta :3000')
})