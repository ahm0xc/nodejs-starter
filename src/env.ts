import { config } from "dotenv";
import { z } from "zod";

config();

export const EnvSchema = z.object({
  FOO: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
