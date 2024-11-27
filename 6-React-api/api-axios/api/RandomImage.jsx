import React, { useState } from "react";
import axios from "axios";

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.pexels.com/v1/search?query=nature", {
        headers: {
          Authorization: "TU_API_KEY_PEXELS"  // Reemplaza con tu API Key
        }
      });
      const randomImage = response.data.photos[Math.floor(Math.random() * response.data.photos.length)];
      setImageUrl(randomImage.src.medium);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Imagen Aleatoria</h1>
      <button onClick={fetchImage} disabled={loading}>
        {loading ? "Cargando..." : "Obtener Nueva Imagen"}
      </button>
      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img src={imageUrl} alt="Imagen aleatoria" style={{ borderRadius: "15px", width: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default RandomImage;
