"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload) {
  const { name, phone, email } = data;

  console.log("API Key exists:", !!process.env.RESEND_API_KEY);
  console.log("Sending to:", data);

  const { data: emailData, error } = await resend.emails.send({
    from: "Atomy România <onboarding@resend.dev>",
    to: ["radu.bordea.dev@gmail.com"],
    replyTo: email || undefined,
    subject: `🔔 Cerere nouă de la ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#7C3AED,#5B21B6);padding:28px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:20px;">Cerere nouă — Atomy România</h1>
        </div>
        <div style="background:#fff;padding:28px;border:1px solid #EDE9FE;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-weight:700;color:#5B21B6;width:120px;">Nume</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eeff;color:#2D2D3A;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eeff;font-weight:700;color:#5B21B6;">Telefon</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eeff;color:#2D2D3A;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:700;color:#5B21B6;">Email</td>
              <td style="padding:10px 0;color:#2D2D3A;">${email || "—"}</td>
            </tr>
          </table>
          <p style="margin-top:20px;font-size:12px;color:#A0A0B0;">
            Trimis din formularul de pe landing page Atomy România.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message);
  }
  console.log("Email sent:", emailData);
  return { success: true };
}