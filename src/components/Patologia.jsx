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

        // Alternar elementos en columnas y mantener índice original
        const col1 = [];
        const col2 = [];

        data.forEach((item, i) => {
          const newItem = { ...item, globalIndex: i + 1 }; // usamos i+1 para que el conteo empiece en 1
          if (i % 2 === 0) {
            col1.push(newItem);
          } else {
            col2.push(newItem);
          }
        });

        setColumnaUno(col1);
        setColumnaDos(col2);

        setOpenItemsCol1(Array(col1.length).fill(false));
        setOpenItemsCol2(Array(col2.length).fill(false));
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
      {columnaUno.length === 0 && columnaDos.length === 0 ? (
        <div className="loadingContainer">
          <h1>Cargando...</h1>
        </div>
      ) : (
        <>
          <div className="firstCol">
            {columnaUno.map((item, index) => {
              return (
                <div className="cirugiasContainer" key={index}>
                  <div className="cirugiasHeader">
                    <h2>{item.globalIndex}</h2>
                    <h1>{item.nombre}</h1>
                  </div>
                  <div className="openText">
                    <p>{item.resumen}</p>
                    <button onClick={() => toggleItemCol1(index)}>
                      {openItemsCol1[index] ? (
                        <IoIosArrowDropupCircle />
                      ) : (
                        <IoIosArrowDropdownCircle />
                      )}
                    </button>
                  </div>
                  {openItemsCol1[index] && (
                    <div className="texto">
                      {item.explicacion.split('\n').map((linea, i) => (
                        <p key={i}>{linea}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="secondCol">
            {columnaDos.map((item, index) => {
              return (
                <div className="cirugiasContainer" key={index}>
                  <div className="cirugiasHeader">
                    <h2>{item.globalIndex}</h2>
                    <h1>{item.nombre}</h1>
                  </div>
                  <div className="openText">
                    <p>{item.resumen}</p>
                    <button onClick={() => toggleItemCol2(index)}>
                      {openItemsCol2[index] ? (
                        <IoIosArrowDropupCircle />
                      ) : (
                        <IoIosArrowDropdownCircle />
                      )}
                    </button>
                  </div>
                  {openItemsCol2[index] && (
                    <div className="texto">
                      {item.explicacion.split('\n').map((linea, i) => (
                        <p key={i}>{linea}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Patologia;
