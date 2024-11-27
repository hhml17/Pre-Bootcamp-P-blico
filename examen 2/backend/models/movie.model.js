import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, default: 0 }, // Agregar campo de calificación
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
