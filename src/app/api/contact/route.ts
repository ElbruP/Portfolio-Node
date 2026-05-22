import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { name, email, message } = body;

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "elbrusprokopets11@gmail.com",
      subject: "Neue Portfolio Nachricht",
      html: `
        <h2>Neue Nachricht</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log(response);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}