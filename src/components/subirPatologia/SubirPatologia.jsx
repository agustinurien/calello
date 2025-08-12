import React, { useState, useEffect } from "react";
import "./subirpatologia.css";
import {
  fetchPatologiasPosts,
  uploadPatologiaPost,
  deletePatologiaPost,
  uploadConsultorioPost,
  fetchConsultoriosPosts,
  deleteConsultorioPost,
} from "../../utils/funciones";

const SubirPatologia = () => {
  const [confirm, setConfirm] = useState(false);
  const [confirm2, setConfirm2] = useState(false);

  const [nombre, setNombre] = useState("");
  const [resumen, setResumen] = useState("");
  const [explicacion, setExplicacion] = useState("");
  const [loading, setLoading] = useState(false);

  const [patologia, setPatologia] = useState([]);

  const [nombreConsultorio, setNombreConsultorio] = useState("");
  const [direccionModalidad, setDireccionModalidad] = useState("");
  const [masInformacion, setMasInformacion] = useState("");
  const [adicional, setAdicional] = useState("");
  const [linkConsultorio, setLinkConsultorio] = useState("");
  const [loading2, setLoading2] = useState(false);

  const [consultorio, setConsultorio] = useState([]);


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

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setLoading2(true);
    try {
      await uploadConsultorioPost({
        nombre: nombreConsultorio,
        direccionModalidad: direccionModalidad,
        masInformacion: masInformacion,
        adicional: adicional,
        linkConsultorio: linkConsultorio,
      });

      alert("Post subido con éxito");
      setNombreConsultorio("");
      setDireccionModalidad("");
      setMasInformacion("");
      setAdicional("");
      setLinkConsultorio("");

      setConfirm2(!confirm);
    } catch (err) {
      console.error("Error al subir el post:", err);
      alert("Error al subir el post");
    }

    setLoading(false);
  };

  useEffect(() => {
    const loadPosts2 = async () => {
      try {
        const data = await fetchConsultoriosPosts();
        console.log("Posts fetched:", data);

        setConsultorio(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts2();
  }, [confirm2]);

  return (
    <div className="uploadFirebase">

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

      <section className="subirConsultorio">
        <form onSubmit={handleSubmit2} className="formContainer">
          <input
            type="text"
            placeholder="Nombre Consultorio"
            value={nombreConsultorio}
            onChange={(e) => setNombreConsultorio(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Direccion/Modalidad"
            value={direccionModalidad}
            onChange={(e) => setDireccionModalidad(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Mas Informacion"
            value={masInformacion}
            onChange={(e) => setMasInformacion(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Adicional"
            value={adicional}
            onChange={(e) => setAdicional(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Link consultorio"
            value={linkConsultorio}
            onChange={(e) => setLinkConsultorio(e.target.value)}
            required
          />


          <button type="submit" disabled={loading2}>
            {loading2 ? "Subiendo..." : "Publicar"}
          </button>
        </form>
        <div className="eliminarPatologiaContainer">
          <h2>ELIMINAR CONSULTORIO</h2>
          <div className="patologiasContainer">
            {consultorio.map((item, index) => (
              <div className="patologiaItem" key={index}>
                <h3>{item.nombre}</h3>
                <button onClick={() => setConfirm2(deleteConsultorioPost(item.id))}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubirPatologia;
