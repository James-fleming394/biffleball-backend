const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});