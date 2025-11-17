import z from "zod";

export const ContactFormSchema = z.object({
  subject: z.string(),
  name: z.string().min(1, { error: "Ingrese su nombre completo" }),
  role: z.string(),
  email: z.email(),
  phone: z.string().min(10, { error: "Ingrese un número de teléfono válido" }),
  detail: z.string().min(1, { error: "Ingrese la descripción" }),
});
