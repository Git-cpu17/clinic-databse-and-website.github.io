// server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const db = require('./backend/db');
const loginRoute = require('./backend/routerFiles/loginRoute');
const registerRoute = require('./backend/routerFiles/registerRoute');
const appointmentRoute = require('./backend/routerFiles/appointmentRoute');

// Use routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/appointments', appointmentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));