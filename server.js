const express = require('express')
const app = express();
const port = 3001
const quiz = require('./quiz');
const cors = require('cors');

app.use(cors());

app.get('/quiz', (req, res) => {
    res.json(quiz);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

