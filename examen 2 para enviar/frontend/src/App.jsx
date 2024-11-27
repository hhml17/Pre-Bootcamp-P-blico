import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeApp from './pages/HomeApp';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie'; // Importa el componente de Editar Película

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homeapp" element={<HomeApp />} />
        <Route path="/movies/add" element={<AddMovie />} />
        <Route path="/movies/edit/:id" element={<EditMovie />} /> {/* Ruta para Editar Película */}
      </Routes>
    </div>
  );
}

export default App;
