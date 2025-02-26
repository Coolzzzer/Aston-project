import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Имя должно быть не меньше двух символов"),
  email: z.string().email("Введите правильный email"),
  password: z.string().min(6, "Пароль должен быть не меньше шести символов"),
});
