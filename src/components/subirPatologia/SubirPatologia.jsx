import React, { useState } from "react";
import "./subirpatologia.css";
import { uploadPatologiaPost } from "../../utils/funciones";

const SubirPatologia = () => {
  const [nombre, setNombre] = useState("");
  const [resumen, setResumen] = useState("");
  const [explicacion, setExplicacion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await uploadPatologiaPost({
        nombre: nombre,
        resumen: resumen,
        explicacion: explicacion,
      });

      alert("Post subido con éxito");
      setNombre("");
      setExplicacion("");
    } catch (err) {
      console.error("Error al subir el post:", err);
      alert("Error al subir el post");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Resumen"
        value={resumen}
        onChange={(e) => setResumen(e.target.value)}
        required
      />
      <textarea
        placeholder="Explicacion de la patología"
        value={explicacion}
        onChange={(e) => setExplicacion(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Subiendo..." : "Publicar"}
      </button>
    </form>
  );
};

export default SubirPatologia;
