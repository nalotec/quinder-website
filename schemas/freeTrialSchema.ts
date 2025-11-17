import z from "zod";

export const FreeTrialFormSchema = z.object({
  // Datos del usuario
  userDto: z
    .object({
      name: z.string().min(2, { message: "Ingrese su nombre" }),
      last_name: z.string().min(2, { message: "Ingrese sus apellidos" }),
      role: z
        .transform(Number)
        .pipe(z.number())
        .refine((val) => val === 1 || val === 4, {
          error: "Seleccione un rol de usuario válido",
        }),
      email: z.email({ message: "Ingrese un correo electrónico válido" }),
      phone: z
        .string()
        .regex(/^\d{10}$/, "Ingrese un número de teléfono válido"),
      password: z.string().min(1, { message: "Ingrese su contraseña" }),
      passwordConfirm: z.string().min(1, { message: "Confirme su contraseña" }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Las contraseñas deben ser iguales",
      path: ["passwordConfirm"],
    }),

  // Datos de la estancia
  estanciaDto: z.object({
    name: z.string().min(1, { message: "Ingrese el nombre de la estancia" }),
    address_1: z
      .string()
      .min(1, { message: "Ingrese la dirección de la estancia" }),
    address_2: z.string().optional(),
    colony: z.string().min(1, { message: "Ingrese la colonia" }),
    city: z.string().min(1, { message: "Ingrese la alcaldía o municipio" }),
    state: z.string().refine((val) => val !== "", {
      error: "Seleccione el estado de la lista",
    }),
    zip_code: z
      .string()
      .regex(/^\d{5}$/, "Ingrese un código postal de 5 dígitos"),
  }),
});
