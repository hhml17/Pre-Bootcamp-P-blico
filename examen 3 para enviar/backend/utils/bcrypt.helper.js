import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};