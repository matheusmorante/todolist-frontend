const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html' ));
});

const PORT = 5000;
app.listen(PORT, () => (console.log('Server rodando https://localhost:'+PORT)));