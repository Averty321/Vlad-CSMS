const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let standards = []; // Массив для хранения эталонов

// Получение всех эталонов
app.get('/standards', (req, res) => {
    res.json(standards);
});

// Добавление нового эталона
app.post('/standards', (req, res) => {
    const newStandard = req.body;
    standards.push(newStandard);
    res.status(201).json(newStandard);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
