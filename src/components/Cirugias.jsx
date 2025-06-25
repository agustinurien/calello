import React, { useState } from "react";
import "./cirugias.css";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Cirugias = () => {
  const columnaUno = [
    { id: 1, title: "Cirugía Programada" },
    { id: 2, title: "Cirugía Programada" },
    { id: 3, title: "Cirugía Programada" },
    { id: 4, title: "Cirugía Programada" },
  ];

  const columnaDos = [
    { id: 5, title: "Cirugía Programada" },
    { id: 6, title: "Cirugía Programada" },
    { id: 7, title: "Cirugía Programada" },
  ];

  const [openItemsCol1, setOpenItemsCol1] = useState(
    Array(columnaUno.length).fill(false)
  );
  const [openItemsCol2, setOpenItemsCol2] = useState(
    Array(columnaDos.length).fill(false)
  );

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
                <h2>{item.id}</h2>
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
                <h2>{item.id}</h2>
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

export default Cirugias;
