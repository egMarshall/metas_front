import { z } from "zod";

const envSchema = z.object({
  VITE_USER_TOKEN: z.string(),
});

export const env = envSchema.parse(import.meta.env);
