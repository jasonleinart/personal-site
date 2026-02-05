import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      // Check origin
      const origin = request.headers.get("Origin");
      const allowedOrigins = env.ALLOWED_ORIGINS?.split(",") || [];

      if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
        return new Response("Forbidden", { status: 403 });
      }

      const data = await request.json();
      const { name, email, message } = data;

      // Basic validation
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ success: false, error: "Missing required fields" }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        );
      }

      const resend = new Resend(env.RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: "Contact Form <contact@jasonleinart.com>",
        to: "dspjson@gmail.com",
        replyTo: email,
        subject: `Contact from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Sent from jasonleinart.com contact form</small></p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      );

    } catch (error) {
      console.error("Worker error:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
      );
    }
  },
};
