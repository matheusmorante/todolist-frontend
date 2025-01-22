const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.arguments(express.static(path.join(__dirname, 'client')));