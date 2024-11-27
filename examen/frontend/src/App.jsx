// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeApp from './pages/HomeApp';
import EditTaskForm from './components/EditTaskForm'; // Importa el formulario de edición

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeapp" element={<HomeApp />} />
          <Route path="/homeapp/edit/:id" element={<EditTaskForm />} /> {/* Ruta para editar tarea */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;