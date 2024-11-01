import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import userRoutes from './routes/user.routes.js';




dotenv.config();

const app = express();

app.use('/api/users', userRoutes);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

dbConnect();

app.listen(PORT, () => {
    console.log(`¡Escuchando en el puerto: ${PORT}!`);
});

