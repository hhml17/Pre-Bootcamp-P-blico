// controllers/user.controller.js
import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  try {
    // Validaciones
    if (!name || name.length < 3) {
      return res.status(400).json({ message: 'El nombre debe tener al menos 3 caracteres' });
    }
    if (!lastName || lastName.length < 3) {
      return res.status(400).json({ message: 'El apellido debe tener al menos 3 caracteres' });
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Ingresa un correo electrónico válido' });
    }
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres' });
    }

    // Verificar si el correo ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = new User({ name, lastName, email, password: hashedPassword });
    await newUser.save();

    // Generar el token JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    // Enviar respuesta con el token
    res.status(201).json({
      message: 'Usuario registrado correctamente',
      token,  // Enviar el token al cliente
      user: { id: newUser._id, name: newUser.name, lastName: newUser.lastName, email: newUser.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Iniciar sesión de usuario
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la almacenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.status(200).json({ 
      token, 
      user: { id: user._id, email: user.email, name: user.name, lastName: user.lastName } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};
