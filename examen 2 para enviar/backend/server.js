import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import userRoutes from './routes/user.routes.js';
import taskRoutes from './routes/task.routes.js';
import movieRoutes from './routes/movie.routes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
dbConnect();

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/movies', movieRoutes); // Agrega la ruta de películas

// Manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`¡Escuchando en el puerto: ${PORT}!`);
});
