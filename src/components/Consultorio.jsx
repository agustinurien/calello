import React, { useState, useEffect } from "react";
import { fetchConsultoriosPosts } from "../utils/funciones";
import "./consultorio.css";
const Consultorio = () => {
  const [consultorios, setConsultorios] = useState([]);
  console.log("Consultorios:", consultorios);

  useEffect(() => {
    const loadPosts2 = async () => {
      try {
        const data = await fetchConsultoriosPosts();
        console.log("Posts fetched:", data);

        setConsultorios(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts2();
  }, []);

  return (
    <>
      {
        consultorios.map((item, index) => {
          return (

            <div key={index} class="consultorioContainerSinImage">
              <div class="consultorioText">
                <div class="detalles">
                  <div class="especialidad">
                    <h3>
                      {item.nombre}
                    </h3>
                  </div>
                  <div class="detallesText">
                    <p>
                      {item.direccionModalidad}
                    </p>
                    <p>
                      {item.masInformacion}
                    </p>
                    <p>
                      {item.adicional}
                    </p>
                  </div>
                </div>
                <div class="linkConsultorio">
                  <a href={item.link}>MÁS INFO</a>
                </div>
              </div>
            </div>
          )
        })}

    </>
  );
};

export default Consultorio;
