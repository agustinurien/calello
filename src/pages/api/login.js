
export async function ALL({ request }) {
    return new Response(
        JSON.stringify({ message: `Recibido método ${request.method}` }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
}

async function validarContraseña(password) {
    const contraseñaValida = import.meta.env.SECRET_PASS;
    if (!contraseñaValida) {
        console.error("SECRET_PASS no está definida en las variables de entorno.");
        return false;
    }
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

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const password = formData.get("password");

        const autorizado = await validarContraseña(password);

        return new Response(
            JSON.stringify({ autorizado }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error en POST /api/login:", error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

export async function GET() {
    return new Response(
        JSON.stringify({ message: "Este endpoint solo acepta POST" }),
        {
            status: 405,
            headers: { "Content-Type": "application/json" },
        }
    );
}