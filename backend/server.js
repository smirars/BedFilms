const express = require('express');
const connectDB = require('./config');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Сервер работает!');
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
