const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/menu', require('./routes/menu'));

app.listen(process.env.PORT);