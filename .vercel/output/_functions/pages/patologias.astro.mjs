import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_lAzfmJes.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_SJkqxJU_.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                      */
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import { f as fetchPatologiasPosts } from '../chunks/funciones_B1k4gLSQ.mjs';
export { renderers } from '../renderers.mjs';

const icon3 = new Proxy({"src":"/_astro/icon3.Bk9T1DWt.png","width":1432,"height":1446,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/icon3.png";
							}
							
							return target[name];
						}
					});

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
        const col1 = [];
        const col2 = [];
        data.forEach((item, i) => {
          const newItem = { ...item, globalIndex: i + 1 };
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
    setOpenItemsCol1(
      (prev) => prev.map((open, i) => i === index ? !open : open)
    );
  };
  const toggleItemCol2 = (index) => {
    setOpenItemsCol2(
      (prev) => prev.map((open, i) => i === index ? !open : open)
    );
  };
  return /* @__PURE__ */ jsx(Fragment, { children: columnaUno.length === 0 && columnaDos.length === 0 ? /* @__PURE__ */ jsx("div", { className: "loadingContainer", children: /* @__PURE__ */ jsx("h1", { children: "Cargando..." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "firstCol", children: columnaUno.map((item, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "cirugiasContainer", children: [
        /* @__PURE__ */ jsxs("div", { className: "cirugiasHeader", children: [
          /* @__PURE__ */ jsx("h2", { children: item.globalIndex }),
          /* @__PURE__ */ jsx("h1", { children: item.nombre })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "openText", children: [
          /* @__PURE__ */ jsx("p", { children: item.resumen }),
          /* @__PURE__ */ jsx("button", { onClick: () => toggleItemCol1(index), children: openItemsCol1[index] ? /* @__PURE__ */ jsx(IoIosArrowDropupCircle, {}) : /* @__PURE__ */ jsx(IoIosArrowDropdownCircle, {}) })
        ] }),
        openItemsCol1[index] && /* @__PURE__ */ jsx("div", { className: "texto", children: item.explicacion.split("\n").map((linea, i) => /* @__PURE__ */ jsx("p", { children: linea }, i)) })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "secondCol", children: columnaDos.map((item, index) => {
      return /* @__PURE__ */ jsxs("div", { className: "cirugiasContainer", children: [
        /* @__PURE__ */ jsxs("div", { className: "cirugiasHeader", children: [
          /* @__PURE__ */ jsx("h2", { children: item.globalIndex }),
          /* @__PURE__ */ jsx("h1", { children: item.nombre })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "openText", children: [
          /* @__PURE__ */ jsx("p", { children: item.resumen }),
          /* @__PURE__ */ jsx("button", { onClick: () => toggleItemCol2(index), children: openItemsCol2[index] ? /* @__PURE__ */ jsx(IoIosArrowDropupCircle, {}) : /* @__PURE__ */ jsx(IoIosArrowDropdownCircle, {}) })
        ] }),
        openItemsCol2[index] && /* @__PURE__ */ jsx("div", { className: "texto", children: item.explicacion.split("\n").map((linea, i) => /* @__PURE__ */ jsx("p", { children: linea }, i)) })
      ] }, index);
    }) })
  ] }) });
};

const $$Patologias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-p6saz3ym": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="titulo" data-astro-cid-p6saz3ym> <div class="iconContainer" data-astro-cid-p6saz3ym> <img${addAttribute(icon3.src, "src")} alt="" data-astro-cid-p6saz3ym> </div> <div data-astro-cid-p6saz3ym> <h1 data-astro-cid-p6saz3ym>Patología <br data-astro-cid-p6saz3ym>ambulatoria</h1> <h3 data-astro-cid-p6saz3ym>Las respuestas que necesita</h3> </div> </div> <div class="tituloBottom" data-astro-cid-p6saz3ym></div> <section data-astro-cid-p6saz3ym> <div class="containerCirugia" data-astro-cid-p6saz3ym> ${renderComponent($$result2, "Patologia", Patologia, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Patologia.jsx", "client:component-export": "default", "data-astro-cid-p6saz3ym": true })} </div> </section> <div class="dudas" data-astro-cid-p6saz3ym> <h3 data-astro-cid-p6saz3ym>¿Aún tiene dudas? Contácteme.</h3> <div class="links" data-astro-cid-p6saz3ym> <a href="https://wa.me/5491130145034" target="_blank" data-astro-cid-p6saz3ym>Dr.Calello-Cirugiapediatrica</a> <a href="https://www.instagram.com/docsanticalello/" target="_blank" class="doc" data-astro-cid-p6saz3ym>@DocSantiCalello</a> </div> </div> ` })} `;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/patologias.astro", void 0);

const $$file = "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/patologias.astro";
const $$url = "/patologias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Patologias,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
