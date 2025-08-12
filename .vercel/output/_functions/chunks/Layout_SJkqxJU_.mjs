import { c as createComponent, m as maybeRenderHead, a as renderComponent, r as renderTemplate, b as addAttribute, d as renderScript, e as createAstro, f as renderHead, g as renderSlot } from './astro/server_lAzfmJes.mjs';
import 'kleur/colors';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
/* empty css                                */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sz7xmlte> <div class="linksContainer" data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/" data-astro-cid-sz7xmlte>Inicio</a> </li> <li data-astro-cid-sz7xmlte> <a href="/quienSoy" data-astro-cid-sz7xmlte>Quien soy</a> </li> <li data-astro-cid-sz7xmlte> <a href="/consultorios" data-astro-cid-sz7xmlte>Consultorios</a> </li> <li data-astro-cid-sz7xmlte> <a href="/quirurgico" data-astro-cid-sz7xmlte>Pre Quirurgico</a> </li> <li data-astro-cid-sz7xmlte> <a href="/patologias" data-astro-cid-sz7xmlte>Patologias Ambulatorias</a> </li> </ul> </div> <div class="derechos" data-astro-cid-sz7xmlte> <div class="socialLinks" data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/docsanticalello/" target="_blank" data-astro-cid-sz7xmlte>${renderComponent($$result, "FaInstagram", FaInstagram, { "data-astro-cid-sz7xmlte": true })}</a> <a href="https://www.linkedin.com/in/santiago-e-m-calello-55008418/" target="_blank" data-astro-cid-sz7xmlte>${renderComponent($$result, "FaLinkedinIn", FaLinkedinIn, { "data-astro-cid-sz7xmlte": true })}</a> <a href="https://wa.me/5491130145034" target="_blank" data-astro-cid-sz7xmlte>${renderComponent($$result, "FaWhatsapp", FaWhatsapp, { "data-astro-cid-sz7xmlte": true })}</a> </div> <div data-astro-cid-sz7xmlte>Todos los derechos reservados.</div> <div data-astro-cid-sz7xmlte>Desarrollado por TAPE Producciones</div> </div> </section> `;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Footer.astro", void 0);

const logo1 = new Proxy({"src":"/_astro/logo1.Bp5Q1zKN.png","width":1298,"height":612,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/assets/images/logo1.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-5blmo7yk> <a href="/" class="left" data-astro-cid-5blmo7yk> <div class="contenedorLogo" data-astro-cid-5blmo7yk> <img${addAttribute(logo1.src, "src")} alt="logo" class="logo1" data-astro-cid-5blmo7yk> </div> <h2 data-astro-cid-5blmo7yk>Dr. Santiago Calello</h2> </a> <button class="open" data-astro-cid-5blmo7yk>☰</button> <div class="right" data-astro-cid-5blmo7yk> <ul data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk>Inicio</a></li> <li data-astro-cid-5blmo7yk><a href="/quienSoy" data-astro-cid-5blmo7yk>Quien soy</a></li> <li data-astro-cid-5blmo7yk><a href="/consultorios" data-astro-cid-5blmo7yk>Consultorios</a></li> <li data-astro-cid-5blmo7yk><a href="/quirurgico" data-astro-cid-5blmo7yk>Pre Quirurgico</a></li> <li data-astro-cid-5blmo7yk><a href="/patologias" data-astro-cid-5blmo7yk>Patologias Ambulatorias</a></li> </ul> <div class="socialContainer" data-astro-cid-5blmo7yk> <div class="social" data-astro-cid-5blmo7yk> <a href="https://www.instagram.com/docsanticalello/" target="_blank" data-astro-cid-5blmo7yk>${renderComponent($$result, "FaInstagram", FaInstagram, { "data-astro-cid-5blmo7yk": true })}</a> <a href="https://www.linkedin.com/in/santiago-e-m-calello-55008418/" target="_blank" data-astro-cid-5blmo7yk>${renderComponent($$result, "FaLinkedinIn", FaLinkedinIn, { "data-astro-cid-5blmo7yk": true })}</a> </div> <div class="wpp" data-astro-cid-5blmo7yk> <a href="https://wa.me/5491130145034" target="_blank" class="wppIcon" data-astro-cid-5blmo7yk>${renderComponent($$result, "FaWhatsapp", FaWhatsapp, { "data-astro-cid-5blmo7yk": true })}</a> <a href="https://wa.me/5491130145034" target="_blank" class="contactar" data-astro-cid-5blmo7yk>CONTACTAR</a> </div> </div> </div> </nav> ${renderScript($$result, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/User/Documents/AGUSTIN URIEN/TAPE/calello/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
