import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, default: 0 }, // Campo de calificación
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
