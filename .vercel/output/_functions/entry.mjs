import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Csh4nko2.mjs';
import { manifest } from './manifest_BC4cbL7i.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.astro.mjs');
const _page2 = () => import('./pages/consultorios.astro.mjs');
const _page3 = () => import('./pages/patologias.astro.mjs');
const _page4 = () => import('./pages/quiensoy.astro.mjs');
const _page5 = () => import('./pages/quirurgico.astro.mjs');
const _page6 = () => import('./pages/subirpatologias.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.js", _page1],
    ["src/pages/consultorios.astro", _page2],
    ["src/pages/patologias.astro", _page3],
    ["src/pages/quienSoy.astro", _page4],
    ["src/pages/quirurgico.astro", _page5],
    ["src/pages/subirPatologias.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "86135459-1153-4eb2-ad8d-cdf7e7e39c01",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
