import React, { useState } from "react";
import "./cirugias.css";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Cirugias = () => {
  const columnaUno = [
    {
      id: 1,
      title: "Cirugía Programada",
      texto:
        "En caso de programar una cirugía siempre es preferible hacerlo con tiempo.\n Esto disminuye las posibilidades de errores involuntarios. Siempre se solicitara un Electrocardiograma evaluación de un cardiólogo y un Laboratorio completo, con Hemograma completo con coagulo-grama, junto con la evaluación por un Pediatra (preferentemente el de cabecera) ya que ellos son parte esencial de la curación del paciente. De esta es la forma descartamos patologías previamente no advertidas y disminuir los riesgos de las cirugías.\n Otros estudios se podrían pedir si la patología lo amerita, ej: ecografía, tomografía, resonancia, laboratorios de mayor complejidad, etc.",
    },
    {
      id: 2,
      title: "Semana Previa",
      texto:
        "Es importante que el paciente entienda que se va a operar, el ocultar información no funciona bien. Siempre lo mejor es explicar el porque de la intervención sin importar la edad, y por sobre todas las cosas remarcar que esto lo hacemos para que el/ella se sienta mejor. De ser necesario se puede realizar consultas de psicoprofilaxis prequirurgica.\n Dos días antes de la intervención lo mejor es bañar al paciente con JABÓN DE PERVINOX O ANTISÉPTICO, esto disminuye la carga de gérmenes en piel y el riesgo de infecciones post-operatorias.",
    },
    {
      id: 3,
      title: "Ayuno",
      texto:
        "Es importante mantener los ayunos requeridos para las cirugías, esto evita accidentes durante la anestesia:\n Hasta 6 horas antes, el paciente puede consumir alimentos LIVIANOS. Luego de este tiempo no deberá ingerir ningún tipo de alimento SOLI Hasta 5 horas antes el paciente podra consumir LECHE DE FORMULA. Luego de esto no deberá ingerir LECHE DE FORMU Hasta 3 horas antes el paciente podra ingerir LECHE MATERNA (pecho). Luego de este tiempo el paciente no deberá ingerir LECHE MATER Hasta 1 hora antes el paciente puede ingerir AGUA, TE O BEBIDAS DEPORTIVAS. Luego de este tiempo no deberá ingerir LíQUIDOS CLAROS.\n  Estos cálculos están realizados en base al tiempo que tarda el estomago en evacuar cada uno de los contenidos.",
    },
    {
      id: 4,
      title: "El mismo dia",
      texto:
        "Siempre es mejor presentarse en la clínica al menos 2 horas antes del procedimiento para realizar los tramites administrativos.\n Importante recordar llevar todos los estudios a la clínica así como el carnet de la obra social y documento de identidad.",
    },
  ];

  const columnaDos = [
    {
      id: 5,
      title: "Antes de la Cirugia",
      texto:
        "Una vez ingresados a la clínica serán llevados a una habitación donde se realizará el baño prequirúrgico pertinente y se les retirará la ropa que traigan de casa para ponerse la ropa necesaria para entrar a la cirugía.\n Hasta la puerta del quirófano ambos padres podrán acompañar al paciente, una vez allí uno de los padres podrá cambiarse e ingresar con el paciente hasta que la inducción anestésica haya finalizado (hasta que el paciente se duerma).",
    },
    {
      id: 6,
      title: "Despues de la Cirugia",
      texto:
        "El paciente saldrá dormido de quirófano y se despertara en las 2 horas posteriores al procedimiento.\n  Se recomienda que ambos padres estén durante este proceso.\n  Una vez que el paciente se despierte se le ofrecerá un vaso de agua o jugo (si prefiriera) para probar la tolerancia oral (las drogas anestésicas pueden causar nauseas) siempre y cuando el procedimiento no requiera de un ayuno post-operatorio previamente pautado.\n Una vez que el paciente este despierto, haya tolerado dieta liquida y no se encuentre con dolor se otorgara el ALTA ambulatorio bajo las alarmas pertinentes a la cirugía y un nuevo control pautado en consultorios externos. ",
    },
    {
      id: 7,
      title: "Urgencias",
      texto:
        "En las cirugías de urgencia no es necesario haberse realizado ninguno estudio previo, todos se realizaran en el contexto de la guarida y se evaluara la necesidad o no de diferentes estudios dependiendo de la patología.\n Una hora antes de la cirugía se le realizara al paciente un baño prequirurgico.\n Hasta la puerta del quirofano los padres y familiares podran acopmpañar, ya dentro del quirófano uno de los padres/tutores del paciente podran permanecer hasta que el paciente se encuentre dormido. ",
    },
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
                <h1>{item.title}</h1>
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
              {openItemsCol1[index] && (
                <div className="texto">
                  {item.texto.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
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
                <h2>{item.id}</h2>
                <h1>{item.title}</h1>
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
              {openItemsCol2[index] && (
                <div className="texto">
                  {openItemsCol2[index] && (
                    <div className="texto">
                      {item.texto.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cirugias;
