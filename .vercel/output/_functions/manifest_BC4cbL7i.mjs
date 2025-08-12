import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_lAzfmJes.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BLHNeaw4.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/","cacheDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/node_modules/.astro/","outDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/dist/","srcDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/src/","publicDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/public/","buildClientDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/dist/client/","buildServerDir":"file:///C:/Users/User/Documents/AGUSTIN%20URIEN/TAPE/calello/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.js","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"},{"type":"external","src":"/_astro/consultorios.BaZ9O3NR.css"}],"routeData":{"route":"/consultorios","isIndex":false,"type":"page","pattern":"^\\/consultorios\\/?$","segments":[[{"content":"consultorios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/consultorios.astro","pathname":"/consultorios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"},{"type":"external","src":"/_astro/patologias.P57wo9Cr.css"}],"routeData":{"route":"/patologias","isIndex":false,"type":"page","pattern":"^\\/patologias\\/?$","segments":[[{"content":"patologias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/patologias.astro","pathname":"/patologias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"},{"type":"external","src":"/_astro/quienSoy.BK8ffXcL.css"}],"routeData":{"route":"/quiensoy","isIndex":false,"type":"page","pattern":"^\\/quienSoy\\/?$","segments":[[{"content":"quienSoy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quienSoy.astro","pathname":"/quienSoy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"},{"type":"external","src":"/_astro/quirurgico.BAg54aID.css"}],"routeData":{"route":"/quirurgico","isIndex":false,"type":"page","pattern":"^\\/quirurgico\\/?$","segments":[[{"content":"quirurgico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quirurgico.astro","pathname":"/quirurgico","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".uploadFirebase{width:100%;display:flex}.subirPatologia{width:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.subirConsultorio{width:50%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.formContainer{background-color:#ffffffc1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:90%;height:fit-content;padding:0 20px 30px;gap:10px;box-sizing:border-box;border-radius:0 0 10px 10px/0px 0px 10px 10px}.formContainer input{display:flex;flex-direction:column;align-items:flex-start;width:100%;background-color:#fff;border:none;padding:10px;box-sizing:border-box;border-radius:20px;height:40px;border:1px solid rgb(130,130,130)}.formContainer textarea{display:flex;flex-direction:column;align-items:center;width:100%;height:300px;resize:none;background-color:#fff;box-sizing:border-box;border-radius:20px;padding:10px}.formContainer button{display:flex;align-items:center;justify-content:center;width:100%;height:50px;background-color:#000;border-radius:25px;color:#fff;border:none;cursor:pointer;margin-top:20px}.eliminarPatologiaContainer{width:90%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#ffffffc1;margin-top:20px;padding:0 20px 20px;box-sizing:border-box;border-radius:10px}.eliminarPatologiaContainer h2{font-family:Supreme-Variable,sans-serif;font-size:2rem}.patologiasContainer{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px}.patologiasContainer h2{margin:0}.patologiasContainer h3{margin:0;font-family:Supreme-Variable,sans-serif;font-size:1.5rem}.patologiaItem{width:100%;background-color:#fff;padding:20px;box-sizing:border-box;border-radius:20px}.patologiaItem button{width:120px;height:50px;background-color:#000;border-radius:25px;color:#fff;border:none;cursor:pointer}.subirNoticiaContainer[data-astro-cid-tcsewgbk]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#848484;padding:120px 0;box-sizing:border-box}\n"},{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"}],"routeData":{"route":"/subirpatologias","isIndex":false,"type":"page","pattern":"^\\/subirPatologias\\/?$","segments":[[{"content":"subirPatologias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/subirPatologias.astro","pathname":"/subirPatologias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0AkHt3e.css"},{"type":"external","src":"/_astro/consultorios.BUsT7r0x.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/consultorios.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/patologias.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/quienSoy.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/quirurgico.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/pages/subirPatologias.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/login@_@js":"pages/api/login.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/subirPatologias@_@astro":"pages/subirpatologias.astro.mjs","\u0000@astro-page:src/pages/patologias@_@astro":"pages/patologias.astro.mjs","\u0000@astro-page:src/pages/quirurgico@_@astro":"pages/quirurgico.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/consultorios@_@astro":"pages/consultorios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/quienSoy@_@astro":"pages/quiensoy.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CUbL1o7J.mjs","\u0000@astrojs-manifest":"manifest_BC4cbL7i.mjs","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Consultorio":"_astro/Consultorio.BHT6UkIA.js","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Patologia.jsx":"_astro/Patologia.CVF5Y4of.js","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Cirugias":"_astro/Cirugias.HQ_MH7ro.js","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/subirPatologia/SubirPatologia":"_astro/SubirPatologia.DgDBsZRn.js","@astrojs/react/client.js":"_astro/client.BxCTEn3I.js","C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.CuUtPreT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\".open\"),e=document.querySelector(\".right\");t.addEventListener(\"click\",()=>{e.classList.toggle(\"active\"),t.classList.toggle(\"active\"),t.classList.contains(\"active\")?t.textContent=\"x\":t.textContent=\"☰\"});document.addEventListener(\"click\",c=>{!e.contains(c.target)&&!t.contains(c.target)&&(e.classList.remove(\"active\"),t.classList.remove(\"active\"),t.textContent=\"☰\")});"]],"assets":["/_astro/Supreme-Variable.Bzdx_txQ.ttf","/_astro/Supreme-VariableItalic.BUtYyBhO.ttf","/_astro/Recia-VariableItalic.Cwdn5rH4.ttf","/_astro/icon2.D6lP90kN.png","/_astro/logo.BpNbmDhL.png","/_astro/icon3.Bk9T1DWt.png","/_astro/iconContent.BK7mhsoi.png","/_astro/compa.CZu5Q8rx.jpeg","/_astro/iconContent3.B0g8pESH.png","/_astro/iconContent2.CZaNhmgu.png","/_astro/bn.C6yz0G_Z.jpeg","/_astro/selfie.C4a3_n1N.jpeg","/_astro/equipo.B9Vd0nR2.jpeg","/_astro/zoom.BicOAuhk.jpeg","/_astro/hospital.Bx6aKf2H.png","/_astro/fotoPrueba.BotRieoF.jpg","/_astro/operacion.D0aK597Z.jpeg","/_astro/insta3.BWdhzDDu.png","/_astro/lirios.ClZU_Y_H.png","/_astro/calello2.CU_kcre0.png","/_astro/trinidad.Bk5_oun4.jpeg","/_astro/gcp.BnGpgNbc.png","/_astro/christian.CPSNSlMI.png","/_astro/swiss.X1Or-K7i.png","/_astro/icon.CdlGzKXy.png","/_astro/logo1.Bp5Q1zKN.png","/_astro/insta.BaP5_4FI.png","/_astro/anteojos.BPpJTi8h.png","/_astro/insta2.D488-E3f.png","/_astro/consultorios.BaZ9O3NR.css","/_astro/consultorios.BUsT7r0x.css","/_astro/index.C0AkHt3e.css","/_astro/patologias.P57wo9Cr.css","/_astro/quienSoy.BK8ffXcL.css","/_astro/quirurgico.BAg54aID.css","/favicon.svg","/fonts/Recia-Variable.ttf","/fonts/Recia-VariableItalic.ttf","/fonts/Supreme-Variable.ttf","/fonts/Supreme-VariableItalic.ttf","/_astro/Cirugias.HQ_MH7ro.js","/_astro/client.BxCTEn3I.js","/_astro/Consultorio.BHT6UkIA.js","/_astro/consultorios.CfPLUPAh.css","/_astro/funciones.FvOhgKQX.js","/_astro/index.BJfUAbRs.js","/_astro/index.KlpOYPoX.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Patologia.CVF5Y4of.js","/_astro/patologias.B-yRP0et.css","/_astro/quirurgico.0QBlty9n.css","/_astro/SubirPatologia.DgDBsZRn.js","/_astro/subirPatologias.Bjp0kgl0.css"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Y34+6r/wUK+1n9eB0s7B3QJwnf2sXfj8YPxu25GkB7Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
