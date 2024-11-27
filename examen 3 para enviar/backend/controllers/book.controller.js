import Book from '../models/book.model.js';

// Crear un nuevo libro
export const createBook = async (req, res) => {
  const { title, year, author, genre, imageUrl } = req.body;

  try {
    const newBook = new Book({
      title,
      year,
      author,
      genre,
      imageUrl,
      userId: req.userId // Asocia el libro al usuario que lo creó
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el libro' });
  }
};

// Obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
};

// Obtener un libro por ID (vista de detalle)
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro' });
  }
};

// Actualizar un libro existente
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, year, author, genre, imageUrl } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, year, author, genre, imageUrl },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
};

// Eliminar un libro
export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json({ message: 'Libro eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};
