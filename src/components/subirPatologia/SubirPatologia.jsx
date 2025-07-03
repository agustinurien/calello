import React, { useState, useEffect } from "react";
import "./subirpatologia.css";
import {
  fetchPatologiasPosts,
  uploadPatologiaPost,
  deletePatologiaPost,
} from "../../utils/funciones";

const SubirPatologia = () => {
  const [confirm, setConfirm] = useState(false);

  const [nombre, setNombre] = useState("");
  const [resumen, setResumen] = useState("");
  const [explicacion, setExplicacion] = useState("");
  const [loading, setLoading] = useState(false);

  const [patologia, setPatologia] = useState([]);

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
      setConfirm(!confirm);
    } catch (err) {
      console.error("Error al subir el post:", err);
      alert("Error al subir el post");
    }

    setLoading(false);
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPatologiasPosts();
        console.log("Posts fetched:", data);

        setPatologia(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, [confirm]);

  return (
    <section className="subirPatologia">
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
      <div className="eliminarPatologiaContainer">
        <h2>ELIMINAR PATOLOGIA</h2>
        <div className="patologiasContainer">
          {patologia.map((item, index) => (
            <div className="patologiaItem" key={index}>
              <h3>{item.nombre}</h3>
              <p>{item.resumen}</p>
              <button onClick={() => setConfirm(deletePatologiaPost(item.id))}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubirPatologia;
