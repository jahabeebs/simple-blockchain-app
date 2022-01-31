const {PORT} = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');
const {startMining} = require("./mine");

// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());

app.get('/easy', (req, res) => {
    console.log(req.body);
    res.send(startMining("Easy"));
})

app.get('/medium', (req, res) => {
    console.log(req.body);
    res.send(startMining("Medium"));
})

app.get('/hard', (req, res) => {
    console.log(req.body);
    res.send(startMining("Hard"));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
