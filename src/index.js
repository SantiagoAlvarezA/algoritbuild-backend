const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');


const { mongoose } = require('./database');

// Settings
app.use(cors({ origin: 'http://localhost:4200' }));
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api', routes);




// start server

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ' + app.get('port'));
});