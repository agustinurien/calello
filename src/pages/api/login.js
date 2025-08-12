// src/pages/api/login.js
export const prerender = false;

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const password = formData.get("password");
        const autorizado = password === "1234"; // Cambia "1234" por tu lógica real

        return new Response(
            JSON.stringify({ autorizado }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
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