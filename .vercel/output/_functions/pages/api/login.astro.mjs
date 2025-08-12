export { renderers } from '../../renderers.mjs';

const prerender = false;
async function validarContraseña(password) {
  const contraseñaValida = "12345678";
  console.log("Password recibido:", password, "Contraseña válida:", contraseñaValida);
  if (!password) {
    console.error("Contraseña faltante.");
    return false;
  }
  try {
    return contraseñaValida === password;
  } catch (e) {
    console.error("Error validando contraseña", e);
    return false;
  }
}
async function POST({ request }) {
  try {
    const formData = await request.formData();
    const password = formData.get("password");
    const autorizado = await validarContraseña(password);
    return new Response(
      JSON.stringify({ autorizado }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error en POST /api/login:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
async function GET() {
  return new Response(
    JSON.stringify({ message: "Este endpoint solo acepta POST" }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
