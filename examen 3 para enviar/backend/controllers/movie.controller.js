import Movie from '../models/movie.model.js';

// Crear una nueva película
export const createMovie = async (req, res) => {
  const { title, year, director, genre, imageUrl } = req.body;

  try {
    const newMovie = new Movie({
      title,
      year,
      director,
      genre,
      imageUrl,
      userId: req.userId // Asocia la película al usuario que la creó
    });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la película' });
  }
};

// Obtener todas las películas
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener películas' });
  }
};

// Obtener una película por ID (vista de detalle)
export const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la película' });
  }
};

// Actualizar una película existente
export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, year, director, genre, imageUrl } = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, year, director, genre, imageUrl },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la película' });
  }
};

// Eliminar una película
export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    res.status(200).json({ message: 'Película eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la película' });
  }
};
