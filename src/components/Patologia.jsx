import React, { useState, useEffect } from "react";
import "./patologia.css";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { fetchPatologiasPosts } from "../utils/funciones";

const Patologia = () => {
  const [columnaUno, setColumnaUno] = useState([]);
  const [columnaDos, setColumnaDos] = useState([]);
  const [openItemsCol1, setOpenItemsCol1] = useState([]);
  const [openItemsCol2, setOpenItemsCol2] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPatologiasPosts();
        console.log("Posts fetched:", data);

        // Dividir las patologías a la mitad
        const mitad = Math.ceil(data.length / 2);
        const primeraMitad = data.slice(0, mitad);
        const segundaMitad = data.slice(mitad);

        // Guardar en columnas
        setColumnaUno(primeraMitad);
        setColumnaDos(segundaMitad);

        // Inicializar estado de apertura de cada item
        setOpenItemsCol1(Array(primeraMitad.length).fill(false));
        setOpenItemsCol2(Array(segundaMitad.length).fill(false));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  const toggleItemCol1 = (index) => {
    setOpenItemsCol1((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  const toggleItemCol2 = (index) => {
    setOpenItemsCol2((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };
  return (
    <>
      <div className="firstCol">
        {columnaUno.map((item, index) => {
          return (
            <div className="cirugiasContainer" key={index}>
              <div className="cirugiasHeader">
                <h2>{index + 1}</h2>
                <h1>
                  Cirugía <br />
                  Programada
                </h1>
              </div>
              <div className="openText">
                <p>Pasos previos y preparativos necesarios.</p>
                <button onClick={() => toggleItemCol1(index)}>
                  {openItemsCol1[index] ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </button>
              </div>
              {openItemsCol1[index] && <div className="texto"></div>}
            </div>
          );
        })}
      </div>
      <div className="secondCol">
        {columnaDos.map((item, index) => {
          return (
            <div className="cirugiasContainer" key={index}>
              <div className="cirugiasHeader">
                <h2>{index}</h2>
                <h1>
                  Cirugía <br />
                  Programada
                </h1>
              </div>
              <div className="openText">
                <p>Pasos previos y preparativos necesarios.</p>
                <button onClick={() => toggleItemCol2(index)}>
                  {openItemsCol2[index] ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )}
                </button>
              </div>
              {openItemsCol2[index] && <div className="texto"></div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Patologia;
