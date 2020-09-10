const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//{origin: 'http...'} qual o url que deve aceder ao backend
app.use(express.json());
app.use(routes);


app.listen(3333);