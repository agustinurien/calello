import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_lAzfmJes.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_SJkqxJU_.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                      */
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
export { renderers } from '../renderers.mjs';

const icon2 = new Proxy({"src":"/_astro/icon2.D6lP90kN.png","width":1432,"height":1446,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/icon2.png";
							}
							
							return target[name];
						}
					});

const Cirugias = () => {
  const columnaUno = [
    {
      id: 1,
      title: "Cirugía Programada",
      texto: "En caso de programar una cirugía siempre es preferible hacerlo con tiempo.\n Esto disminuye las posibilidades de errores involuntarios. Siempre se solicitara un Electrocardiograma evaluación de un cardiólogo y un Laboratorio completo, con Hemograma completo con coagulo-grama, junto con la evaluación por un Pediatra (preferentemente el de cabecera) ya que ellos son parte esencial de la curación del paciente. De esta es la forma descartamos patologías previamente no advertidas y disminuir los riesgos de las cirugías.\n Otros estudios se podrían pedir si la patología lo amerita, ej: ecografía, tomografía, resonancia, laboratorios de mayor complejidad, etc."
    },
    {
      id: 2,
      title: "Semana Previa",
      texto: "Es importante que el paciente entienda que se va a operar, el ocultar información no funciona bien. Siempre lo mejor es explicar el porque de la intervención sin importar la edad, y por sobre todas las cosas remarcar que esto lo hacemos para que el/ella se sienta mejor. De ser necesario se puede realizar consultas de psicoprofilaxis prequirurgica.\n Dos días antes de la intervención lo mejor es bañar al paciente con JABÓN DE PERVINOX O ANTISÉPTICO, esto disminuye la carga de gérmenes en piel y el riesgo de infecciones post-operatorias."
    },
    {
      id: 3,
      title: "Ayuno",
      texto: "Es importante mantener los ayunos requeridos para las cirugías, esto evita accidentes durante la anestesia:\n Hasta 6 horas antes, el paciente puede consumir alimentos LIVIANOS. Luego de este tiempo no deberá ingerir ningún tipo de alimento SOLI Hasta 5 horas antes el paciente podra consumir LECHE DE FORMULA. Luego de esto no deberá ingerir LECHE DE FORMU Hasta 3 horas antes el paciente podra ingerir LECHE MATERNA (pecho). Luego de este tiempo el paciente no deberá ingerir LECHE MATER Hasta 1 hora antes el paciente puede ingerir AGUA, TE O BEBIDAS DEPORTIVAS. Luego de este tiempo no deberá ingerir LíQUIDOS CLAROS.\n  Estos cálculos están realizados en base al tiempo que tarda el estomago en evacuar cada uno de los contenidos."
    },
    {
      id: 4,
      title: "El mismo dia",
      texto: "Siempre es mejor presentarse en la clínica al menos 2 horas antes del procedimiento para realizar los tramites administrativos.\n Importante recordar llevar todos los estudios a la clínica así como el carnet de la obra social y documento de identidad."
    }
  ];
  const columnaDos = [
    {
      id: 5,
      title: "Antes de la Cirugia",
      texto: "Una vez ingresados a la clínica serán llevados a una habitación donde se realizará el baño prequirúrgico pertinente y se les retirará la ropa que traigan de casa para ponerse la ropa necesaria para entrar a la cirugía.\n Hasta la puerta del quirófano ambos padres podrán acompañar al paciente, una vez allí uno de los padres podrá cambiarse e ingresar con el paciente hasta que la inducción anestésica haya finalizado (hasta que el paciente se duerma)."
    },
    {
      id: 6,
      title: "Despues de la Cirugia",
      texto: "El paciente saldrá dormido de quirófano y se despertara en las 2 horas posteriores al procedimiento.\n  Se recomienda que ambos padres estén durante este proceso.\n  Una vez que el paciente se despierte se le ofrecerá un vaso de agua o jugo (si prefiriera) para probar la tolerancia oral (las drogas anestésicas pueden causar nauseas) siempre y cuando el procedimiento no requiera de un ayuno post-operatorio previamente pautado.\n Una vez que el paciente este despierto, haya tolerado dieta liquida y no se encuentre con dolor se otorgara el ALTA ambulatorio bajo las alarmas pertinentes a la cirugía y un nuevo control pautado en consultorios externos. "
    },
    {
      id: 7,
      title: "Urgencias",
      texto: "En las cirugías de urgencia no es necesario haberse realizado ninguno estudio previo, todos se realizaran en el contexto de la guarida y se evaluara la necesidad o no de diferentes estudios dependiendo de la patología.\n Una hora antes de la cirugía se le realizara al paciente un baño prequirurgico.\n Hasta la puerta del quirofano los padres y familiares podran acopmpañar, ya dentro del quirófano uno de los padres/tutores del paciente podran permanecer hasta que el paciente se encuentre dormido. "
    }
  ];
  const [openItemsCol1, setOpenItemsCol1] = useState(
    Array(columnaUno.length).fill(false)
  );
  const [openItemsCol2, setOpenItemsCol2] = useState(
    Array(columnaDos.length).fill(false)
  );
  const toggleItemCol1 = (index) => {
    setOpenItemsCol1(
      (prev) => prev.map((open, i) => i === index ? !open : open)
    );
  };
  const toggleItemCol2 = (index) => {
    setOpenItemsCol2(
      (prev) => prev.map((open, i) => i === index ? !open : open)
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "firstCol", children: columnaUno.map((item, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "cirugiasContainer", children: [
        /* @__PURE__ */ jsxs("div", { className: "cirugiasHeader", children: [
          /* @__PURE__ */ jsx("h2", { children: item.id }),
          /* @__PURE__ */ jsx("h1", { children: item.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "openText", children: [
          /* @__PURE__ */ jsx("p", { children: "Pasos previos y preparativos necesarios." }),
          /* @__PURE__ */ jsx("button", { onClick: () => toggleItemCol1(index), children: openItemsCol1[index] ? /* @__PURE__ */ jsx(IoIosArrowDropupCircle, {}) : /* @__PURE__ */ jsx(IoIosArrowDropdownCircle, {}) })
        ] }),
        openItemsCol1[index] && /* @__PURE__ */ jsx("div", { className: "texto", children: item.texto.split("\n").map((line, i) => /* @__PURE__ */ jsx("p", { children: line }, i)) })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "secondCol", children: columnaDos.map((item, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "cirugiasContainer", children: [
        /* @__PURE__ */ jsxs("div", { className: "cirugiasHeader", children: [
          /* @__PURE__ */ jsx("h2", { children: item.id }),
          /* @__PURE__ */ jsx("h1", { children: item.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "openText", children: [
          /* @__PURE__ */ jsx("p", { children: "Pasos previos y preparativos necesarios." }),
          /* @__PURE__ */ jsx("button", { onClick: () => toggleItemCol2(index), children: openItemsCol2[index] ? /* @__PURE__ */ jsx(IoIosArrowDropupCircle, {}) : /* @__PURE__ */ jsx(IoIosArrowDropdownCircle, {}) })
        ] }),
        openItemsCol2[index] && /* @__PURE__ */ jsx("div", { className: "texto", children: openItemsCol2[index] && /* @__PURE__ */ jsx("div", { className: "texto", children: item.texto.split("\n").map((line, i) => /* @__PURE__ */ jsx("p", { children: line }, i)) }) })
      ] }, index);
    }) })
  ] });
};

const $$Quirurgico = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-pkzx22mv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="titulo" data-astro-cid-pkzx22mv> <div class="iconContainer" data-astro-cid-pkzx22mv> <img${addAttribute(icon2.src, "src")} alt="" data-astro-cid-pkzx22mv> </div> <div class="textContainer" data-astro-cid-pkzx22mv> <h1 data-astro-cid-pkzx22mv>¿Que deberia hacer antes <br data-astro-cid-pkzx22mv>de una cirugía?</h1> <h3 data-astro-cid-pkzx22mv>Las respuestas que necesita</h3> </div> </div> <div class="tituloBottom" data-astro-cid-pkzx22mv></div> <section data-astro-cid-pkzx22mv> <div class="containerCirugia" data-astro-cid-pkzx22mv> ${renderComponent($$result2, "Cirugias", Cirugias, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Cirugias", "client:component-export": "default", "data-astro-cid-pkzx22mv": true })} </div> </section> <div class="dudas" data-astro-cid-pkzx22mv> <h3 data-astro-cid-pkzx22mv>¿Aún tiene dudas? Contácteme.</h3> <div class="links" data-astro-cid-pkzx22mv> <a href="" data-astro-cid-pkzx22mv>Dr.Calello-Cirugiapediatrica</a> <a href="" class="doc" data-astro-cid-pkzx22mv>@DocSantiCalello</a> </div> </div> ` })} `;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/quirurgico.astro", void 0);

const $$file = "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/quirurgico.astro";
const $$url = "/quirurgico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Quirurgico,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
