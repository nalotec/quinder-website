import z from "zod";

export const ContactFormSchema = z
  .object({
    subject: z.string(),
    name: z.string().min(1, { error: "Ingrese su nombre completo" }),
    role: z.string(),
    email: z.email({ error: "Ingrese un correo electrónico válido" }),
    // phone: z.string().min(10, { error: "Ingrese un número de teléfono válido" }),
    phone: z.string().optional(),
    detail: z
      .string()
      .min(1, { error: "Ingrese la descripción" })
      .refine((val) => val.length >= 20, {
        error: "La descripción debe tener al menos 20 caracteres.",
      }),
  })
  .superRefine((data, ctx) => {
    if (data.phone && data.phone?.length > 0 && data.phone.length < 10) {
      ctx.addIssue({
        path: ["phone"],
        code: "custom",
        message: "Ingrese un número de teléfono válido.",
      });
    }
  });
