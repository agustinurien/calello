import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_lAzfmJes.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_SJkqxJU_.mjs';
import { CiCircleInfo } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as fetchConsultoriosPosts } from '../chunks/funciones_B1k4gLSQ.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const lirios = new Proxy({"src":"/_astro/lirios.ClZU_Y_H.png","width":405,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/lirios.png";
							}
							
							return target[name];
						}
					});

const trinidad = new Proxy({"src":"/_astro/trinidad.Bk5_oun4.jpeg","width":751,"height":303,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/trinidad.jpeg";
							}
							
							return target[name];
						}
					});

const gcp = new Proxy({"src":"/_astro/gcp.BnGpgNbc.png","width":4500,"height":2055,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/gcp.png";
							}
							
							return target[name];
						}
					});

const swiss = new Proxy({"src":"/_astro/swiss.X1Or-K7i.png","width":878,"height":280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/swiss.png";
							}
							
							return target[name];
						}
					});

const christian = new Proxy({"src":"/_astro/christian.CPSNSlMI.png","width":150,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/christian.png";
							}
							
							return target[name];
						}
					});

const icon = new Proxy({"src":"/_astro/icon.CdlGzKXy.png","width":1362,"height":1376,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/icon.png";
							}
							
							return target[name];
						}
					});

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
  return /* @__PURE__ */ jsx(Fragment, { children: consultorios.map((item, index) => {
    return /* @__PURE__ */ jsx("div", { class: "consultorioContainerSinImage", children: /* @__PURE__ */ jsxs("div", { class: "consultorioText", children: [
      /* @__PURE__ */ jsxs("div", { class: "detalles", children: [
        /* @__PURE__ */ jsx("div", { class: "especialidad", children: /* @__PURE__ */ jsx("h3", { children: item.nombre }) }),
        /* @__PURE__ */ jsxs("div", { class: "detallesText", children: [
          /* @__PURE__ */ jsx("p", { children: item.direccionModalidad }),
          /* @__PURE__ */ jsx("p", { children: item.masInformacion }),
          /* @__PURE__ */ jsx("p", { children: item.adicional })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "linkConsultorio", children: /* @__PURE__ */ jsx("a", { href: item.link, children: "MÁS INFO" }) })
    ] }) }, index);
  }) });
};

const $$Consultorios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-w2mkpdzg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="titulo" data-astro-cid-w2mkpdzg> <div class="iconContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(icon.src, "src")} alt="" data-astro-cid-w2mkpdzg> </div> <h1 data-astro-cid-w2mkpdzg>Consultorios <br data-astro-cid-w2mkpdzg>Médicos</h1> </div> <div class="disclaimer" data-astro-cid-w2mkpdzg> ${renderComponent($$result2, "CiCircleInfo", CiCircleInfo, { "fontSize": 40, "data-astro-cid-w2mkpdzg": true })} <p data-astro-cid-w2mkpdzg>
Para una atención más ágil, solicitá turno por teléfono,<br data-astro-cid-w2mkpdzg> mail o online.
      Consultá previamente si tu obra social está<br data-astro-cid-w2mkpdzg> incluida o preguntá por atención
      particular.
</p> </div> <section data-astro-cid-w2mkpdzg> <div class="consultorioContainer" data-astro-cid-w2mkpdzg> <div class="consultorioImage" data-astro-cid-w2mkpdzg> <div class="logoContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(lirios.src, "src")} alt="" class="logoConsultorio" data-astro-cid-w2mkpdzg> </div> </div> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>
Lirios del Talar <br data-astro-cid-w2mkpdzg>(consultas <br data-astro-cid-w2mkpdzg>privadas, OSDE <br data-astro-cid-w2mkpdzg>y
              SMG)
</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Dirección: <br data-astro-cid-w2mkpdzg>
Gral. José Gervasio Artigas 3188, 1617 General Pacheco, Buenos Aires.
<br data-astro-cid-w2mkpdzg>
(A 7 km del centro de General Pacheco)
</p> <p data-astro-cid-w2mkpdzg>
Atención: <br data-astro-cid-w2mkpdzg>
Niños y adolescentes con distintas <br data-astro-cid-w2mkpdzg>patologías quirúrgicas,
              con un enfoque <br data-astro-cid-w2mkpdzg>centrado en el cuidado integral del <br data-astro-cid-w2mkpdzg>paciente y su familia
</p> <p data-astro-cid-w2mkpdzg>
Desde la primera consulta, mi objetivo <br data-astro-cid-w2mkpdzg>es acompañar,
              resolver y brindar <br data-astro-cid-w2mkpdzg> tranquilidad
</p> </div> </div> <div class="linkConsultorio" data-astro-cid-w2mkpdzg> <a href="https://www.docturno.com/gm/lirios-del-talar-grupo-medico" data-astro-cid-w2mkpdzg>MÁS INFO</a> </div> </div> </div> <div class="consultorioContainer" data-astro-cid-w2mkpdzg> <div class="consultorioImage" data-astro-cid-w2mkpdzg> <div class="logoContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(trinidad.src, "src")} alt="" class="logoConsultorio" data-astro-cid-w2mkpdzg> </div> </div> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>Galeno <br data-astro-cid-w2mkpdzg> Trinidad <br data-astro-cid-w2mkpdzg> Cardiovascular</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Dirección: <br data-astro-cid-w2mkpdzg> Av. Sir Alexander Fleming 1049, San <br data-astro-cid-w2mkpdzg> Isidro
              (frente a los estudios de Telefe). <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Día y horario de
              atención: Martes de 17 a 19 hs. Teléfonos: 4898-6700 / 6090-1953 /
              6090-1963 / <br data-astro-cid-w2mkpdzg> 6090-1990
</p> <p data-astro-cid-w2mkpdzg>
Especialidades: <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Coordinación del equipo de cirugía
              pediatrica <br data-astro-cid-w2mkpdzg>Cirugía General Pediátrica <br data-astro-cid-w2mkpdzg>Urología
              Pediátrica <br data-astro-cid-w2mkpdzg>Cirugía Digestiva – Coloproctología <br data-astro-cid-w2mkpdzg> Pediátrica
</p> <p data-astro-cid-w2mkpdzg>
Turnos: <br data-astro-cid-w2mkpdzg> Solicitá tu turno llamando a los teléfonos indicados
              o a través de la aplicación de Galeno. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg> Importante: <br data-astro-cid-w2mkpdzg>Recordá consultar la cobertura de tu <br data-astro-cid-w2mkpdzg> obra social.
</p> </div> </div> <div class="linkConsultorio" data-astro-cid-w2mkpdzg> <a href="https://www.galeno.com.ar/centro-medico/trinidad-medical-center-san-isidro/" data-astro-cid-w2mkpdzg>MÁS INFO</a> </div> </div> </div> <div class="consultorioContainer" data-astro-cid-w2mkpdzg> <div class="consultorioImage" data-astro-cid-w2mkpdzg> <div class="logoContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(gcp.src, "src")} alt="" class="logoConsultorioGcp" data-astro-cid-w2mkpdzg> </div> </div> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>Fundación <br data-astro-cid-w2mkpdzg>Hospitalaria</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Dirección: <br data-astro-cid-w2mkpdzg>Cramer 4601 – Núñez <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Día y horario de
              atención: Lunes de 14:00 a 16:00 hs. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Teléfonos: <br data-astro-cid-w2mkpdzg>4704-2300 <br data-astro-cid-w2mkpdzg> +54 9 11 3080-7279
</p> <p data-astro-cid-w2mkpdzg>
Web: <br data-astro-cid-w2mkpdzg>www.cirujanopediatra.com.ar <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Instagram:
              @grupodecirugiapediatrica <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Especialidades: <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Neuroestimulación <br data-astro-cid-w2mkpdzg>Sesiones de Biofeedback <br data-astro-cid-w2mkpdzg>Consultas
              privadas por obra social <br data-astro-cid-w2mkpdzg>Consultorio de Cirugía General <br data-astro-cid-w2mkpdzg>Pediátrica y Coloproctología Pediátrica. <br data-astro-cid-w2mkpdzg>Consultorio de
              Rehabilitación de <br data-astro-cid-w2mkpdzg>
trastornos del suelo pélvico, <br data-astro-cid-w2mkpdzg>constipación e incontinencia
              fecal.
</p> <p data-astro-cid-w2mkpdzg>
Turnos: <br data-astro-cid-w2mkpdzg>Solicitá tu turno por teléfono o por mail. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>
Importante: <br data-astro-cid-w2mkpdzg>Recordá consultar la cobertura de tu <br data-astro-cid-w2mkpdzg>obra
              social.
</p> </div> </div> <div class="linkConsultorio" data-astro-cid-w2mkpdzg> <a href="https://fh.org.ar/" data-astro-cid-w2mkpdzg>MÁS INFO</a> </div> </div> </div> <div class="consultorioContainer" data-astro-cid-w2mkpdzg> <div class="consultorioImage" data-astro-cid-w2mkpdzg> <div class="logoContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(swiss.src, "src")} alt="" class="logoConsultorio" data-astro-cid-w2mkpdzg> </div> </div> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>Swiss <br data-astro-cid-w2mkpdzg>Medical <br data-astro-cid-w2mkpdzg>Center <br data-astro-cid-w2mkpdzg>Dot</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Consultorio de Cirugía General <br data-astro-cid-w2mkpdzg>Pediátrica, Cirugía Digestiva
              Pediátrica <br data-astro-cid-w2mkpdzg>y Urología Pediátrica <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Dirección: <br data-astro-cid-w2mkpdzg>Vedia 3626 – Dot Baires Shopping, <br data-astro-cid-w2mkpdzg>Capital Federal
</p> <p data-astro-cid-w2mkpdzg>
Día y horario de atención: <br data-astro-cid-w2mkpdzg>Lunes de 18 a 20 hs. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Central de turnos:
<br data-astro-cid-w2mkpdzg> 0810-333-8876 <br data-astro-cid-w2mkpdzg>Solicite turno con anticipación.
</p> <p data-astro-cid-w2mkpdzg>
Cobertura: <br data-astro-cid-w2mkpdzg>Solo Swiss Medical Grupo. <br data-astro-cid-w2mkpdzg>Recuerde
              consultar la cobertura de su <br data-astro-cid-w2mkpdzg>obra social.
</p> </div> </div> <div class="linkConsultorio" data-astro-cid-w2mkpdzg> <a href="https://www.swissmedicalcenter.com.ar/centrosmedicos/dot_baires" data-astro-cid-w2mkpdzg>MÁS INFO</a> </div> </div> </div> <div class="consultorioContainer" data-astro-cid-w2mkpdzg> <div class="consultorioImage" data-astro-cid-w2mkpdzg> <div class="logoContainer" data-astro-cid-w2mkpdzg> <img${addAttribute(christian.src, "src")} alt="" class="logoConsultorioChristian" data-astro-cid-w2mkpdzg> </div> </div> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>Consultorio CCBM <br data-astro-cid-w2mkpdzg>– Dr. Boggio Marzet <br data-astro-cid-w2mkpdzg>& Equipo</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Consultorio Médico: <br data-astro-cid-w2mkpdzg>Aguilar 2073, CABA 1426 <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Atención: <br data-astro-cid-w2mkpdzg>Lunes a Jueves de 15:00 a 19:00 hs
</p> <p data-astro-cid-w2mkpdzg>
Especialidad: <br data-astro-cid-w2mkpdzg>Gastroenterología Pediátrica – <br data-astro-cid-w2mkpdzg>diagnóstico, tratamiento y seguimiento <br data-astro-cid-w2mkpdzg>de patologías
              digestivas en niños y <br data-astro-cid-w2mkpdzg>adolescentes <br data-astro-cid-w2mkpdzg>Modalidad: <br data-astro-cid-w2mkpdzg>Consultas presenciales (segmentación <br data-astro-cid-w2mkpdzg>por especialistas
              dentro del grupo).
</p> <p data-astro-cid-w2mkpdzg>
Contacto: <br data-astro-cid-w2mkpdzg>WhatsApp/ Teléfono: +54 11 3807-2050 <br data-astro-cid-w2mkpdzg>Email:
              info@consultorioccbm.com.ar <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>– Equipo
              interdisciplinario con más de 10 años de trayectoria <br data-astro-cid-w2mkpdzg>
consultorioccbm.com.ar <br data-astro-cid-w2mkpdzg>– Doctor titular y equipo docente <br data-astro-cid-w2mkpdzg>
vinculados a la UBA y Universidad del <br data-astro-cid-w2mkpdzg>Salvador
</p> </div> </div> <div class="linkConsultorio" data-astro-cid-w2mkpdzg> <a href="https://www.consultorioccbm.com.ar" data-astro-cid-w2mkpdzg>MÁS INFO</a> </div> </div> </div> <div class="consultorioContainerSinImage" data-astro-cid-w2mkpdzg> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>Interconsultas <br data-astro-cid-w2mkpdzg> virtuales</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Modalidad: <br data-astro-cid-w2mkpdzg> Online – Para pacientes locales y del <br data-astro-cid-w2mkpdzg> exterior
</p> <p data-astro-cid-w2mkpdzg>Atención: <br data-astro-cid-w2mkpdzg> Día y horario a convenir con el Dr.</p> <p data-astro-cid-w2mkpdzg>
Contacto: <br data-astro-cid-w2mkpdzg>
WhatsApp: +54 9 11 5654-3649 Email: calellosantiago@gmail.com
</p> </div> </div> <div class="contactoConsultorio" data-astro-cid-w2mkpdzg> <a href="https://wa.me/5491156543649" data-astro-cid-w2mkpdzg>${renderComponent($$result2, "FaWhatsapp", FaWhatsapp, { "fontSize": 20, "color": "white", "data-astro-cid-w2mkpdzg": true })}</a> <a href="mailto:calellosantiago@gmail.com" data-astro-cid-w2mkpdzg>${renderComponent($$result2, "IoIosMail", IoIosMail, { "fontSize": 20, "color": "white", "data-astro-cid-w2mkpdzg": true })}</a> </div> </div> </div> <div class="consultorioContainerSinImage" data-astro-cid-w2mkpdzg> <div class="consultorioText" data-astro-cid-w2mkpdzg> <div class="detalles" data-astro-cid-w2mkpdzg> <div class="especialidad" data-astro-cid-w2mkpdzg> <h3 data-astro-cid-w2mkpdzg>
Pediatría Integral <br data-astro-cid-w2mkpdzg>
Ambulatoria
</h3> </div> <div class="detallesText" data-astro-cid-w2mkpdzg> <p data-astro-cid-w2mkpdzg>
Consultorio Médico <br data-astro-cid-w2mkpdzg>Chacabuco 630, PB-B – San Isidro <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Atención: <br data-astro-cid-w2mkpdzg>
Médico Consultor – Horarios a <br data-astro-cid-w2mkpdzg>convenir.
</p> <p data-astro-cid-w2mkpdzg>
Modalidad: <br data-astro-cid-w2mkpdzg>Solo consultas privadas. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Contacto: <br data-astro-cid-w2mkpdzg>
WhatsApp: +54 9 11 6009-2471 <br data-astro-cid-w2mkpdzg>Email: turnospia@gmail.com
</p> <p data-astro-cid-w2mkpdzg>
Especialidades: <br data-astro-cid-w2mkpdzg>Atención en Cirugía General Pediátrica, <br data-astro-cid-w2mkpdzg>
Trastornos Digestivos y Coloproctología <br data-astro-cid-w2mkpdzg>Pediátrica Compleja,
              en un consultorio <br data-astro-cid-w2mkpdzg>integralmente dedicado a pacientes <br data-astro-cid-w2mkpdzg>
pediátricos. <br data-astro-cid-w2mkpdzg><br data-astro-cid-w2mkpdzg>Importante: <br data-astro-cid-w2mkpdzg>Recordá consultar la
              cobertura de tu <br data-astro-cid-w2mkpdzg>obra social.
</p> </div> </div> </div> </div> ${renderComponent($$result2, "Consultorio", Consultorio, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Consultorio", "client:component-export": "default", "data-astro-cid-w2mkpdzg": true })} </section> ` })} `;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/consultorios.astro", void 0);

const $$file = "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/consultorios.astro";
const $$url = "/consultorios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Consultorios,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
