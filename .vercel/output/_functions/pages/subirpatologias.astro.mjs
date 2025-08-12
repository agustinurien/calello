import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_lAzfmJes.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_SJkqxJU_.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                           */
import { d as deletePatologiaPost, a as deleteConsultorioPost, f as fetchPatologiasPosts, b as fetchConsultoriosPosts, u as uploadPatologiaPost, c as uploadConsultorioPost } from '../chunks/funciones_DGBo1bqK.mjs';
export { renderers } from '../renderers.mjs';

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
        nombre,
        resumen,
        explicacion
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
        direccionModalidad,
        masInformacion,
        adicional,
        linkConsultorio
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
  return /* @__PURE__ */ jsxs("div", { className: "uploadFirebase", children: [
    /* @__PURE__ */ jsxs("section", { className: "subirPatologia", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "formContainer", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Nombre",
            value: nombre,
            onChange: (e) => setNombre(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Resumen",
            value: resumen,
            onChange: (e) => setResumen(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            placeholder: "Explicacion de la patología",
            value: explicacion,
            onChange: (e) => setExplicacion(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, children: loading ? "Subiendo..." : "Publicar" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "eliminarPatologiaContainer", children: [
        /* @__PURE__ */ jsx("h2", { children: "ELIMINAR PATOLOGIA" }),
        /* @__PURE__ */ jsx("div", { className: "patologiasContainer", children: patologia.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "patologiaItem", children: [
          /* @__PURE__ */ jsx("h3", { children: item.nombre }),
          /* @__PURE__ */ jsx("p", { children: item.resumen }),
          /* @__PURE__ */ jsx("button", { onClick: () => setConfirm(deletePatologiaPost(item.id)), children: "Eliminar" })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "subirConsultorio", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit2, className: "formContainer", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Nombre Consultorio",
            value: nombreConsultorio,
            onChange: (e) => setNombreConsultorio(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Direccion/Modalidad",
            value: direccionModalidad,
            onChange: (e) => setDireccionModalidad(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Mas Informacion",
            value: masInformacion,
            onChange: (e) => setMasInformacion(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Adicional",
            value: adicional,
            onChange: (e) => setAdicional(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Link consultorio",
            value: linkConsultorio,
            onChange: (e) => setLinkConsultorio(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading2, children: loading2 ? "Subiendo..." : "Publicar" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "eliminarPatologiaContainer", children: [
        /* @__PURE__ */ jsx("h2", { children: "ELIMINAR CONSULTORIO" }),
        /* @__PURE__ */ jsx("div", { className: "patologiasContainer", children: consultorio.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "patologiaItem", children: [
          /* @__PURE__ */ jsx("h3", { children: item.nombre }),
          /* @__PURE__ */ jsx("button", { onClick: () => setConfirm2(deleteConsultorioPost(item.id)), children: "Eliminar" })
        ] }, index)) })
      ] })
    ] })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SubirPatologias = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  const loginArea = document.getElementById('login-area');
  const protegido = document.getElementById('protegido');
  const form = document.getElementById('login-form');
  const errorMsg = document.getElementById('error-msg');

  // Mostrar la vista correcta seg\xFAn localStorage
  if (localStorage.getItem("autorizado") === "true") {
    protegido.style.display = "block";
  } else {
    loginArea.style.display = "block";
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      errorMsg.style.display = 'none';
      const formData = new FormData(form);
      const res = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.autorizado) {
        localStorage.setItem("autorizado", "true");
        loginArea.style.display = "none";
        protegido.style.display = "block";
      } else {
        errorMsg.style.display = 'block';
      }
    });
  }
<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-tcsewgbk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="subirNoticiaContainer" id="container" data-astro-cid-tcsewgbk> <div id="login-area" style="display:none;" data-astro-cid-tcsewgbk> <p data-astro-cid-tcsewgbk>Ingrese la contraseña para acceder</p> <form id="login-form" autocomplete="off" data-astro-cid-tcsewgbk> <input type="password" name="password" placeholder="Contraseña" required autocomplete="off" data-astro-cid-tcsewgbk> <button type="submit" data-astro-cid-tcsewgbk>Entrar</button> </form> <p id="error-msg" style="color: red; display: none;" data-astro-cid-tcsewgbk>Contraseña incorrecta</p> </div> <div id="protegido" style="display:none;" data-astro-cid-tcsewgbk> ${renderComponent($$result2, "SubirPatologia", SubirPatologia, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/subirPatologia/SubirPatologia", "client:component-export": "default", "data-astro-cid-tcsewgbk": true })} </div> </div> ` }));
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/subirPatologias.astro", void 0);

const $$file = "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/subirPatologias.astro";
const $$url = "/subirPatologias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SubirPatologias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
