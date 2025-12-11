import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import pug from "pug";

type ContactBody = {
  subject: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  detail: string;
};

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactBody;
    const { subject, name, role, email, phone, detail } = body;

    const templatePath = path.join(
      process.cwd(),
      "app/api/contact-email/template.pug",
    );

    const html = pug.renderFile(templatePath, {
      subject,
      name,
      role,
      email,
      phone,
      detail,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.NAMECHEAP_HOST as string,
      port: Number(process.env.NAMECHEAP_PORT),
      secure: true,
      auth: {
        user: process.env.NAMECHEAP_USERNAME,
        pass: process.env.NAMECHEAP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACTO_TO_EMAIL,
      subject: `Nuevo mensaje de ${subject.toUpperCase()} de ${name.toUpperCase()}`,
      // replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo: ", error);
    return NextResponse.json(
      { ok: false, error: "Error interno al enviar el correo" },
      { status: 500 },
    );
  }
}
