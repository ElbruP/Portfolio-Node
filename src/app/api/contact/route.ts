import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("API KEY:", process.env.RESEND_API_KEY);

    const body = await req.json();

    console.log("BODY:", body);

    const { name, email, message } = body;

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "elbrusprokopets11@gmail.com",
      subject: "Neue Portfolio Nachricht",
      html: `
        <h2>Neue Nachricht</h2>
        <p>${name}</p>
        <p>${email}</p>
        <p>${message}</p>
      `,
    });

    console.log(response);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      error,
    });
  }
}