const express = require('express');
const path = require('path');
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "chave-secreta", // Chave para assinar os cookies
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Protege contra XSS
      secure: false, 
      maxAge: 1000 * 60 * 60 * 24, 
    },
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = 5000;
app.listen(PORT, () => (console.log('Server rodando http://localhost:'+PORT)));