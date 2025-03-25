import { config } from "dotenv";
import { z } from "zod";

config();

export const EnvSchema = z.object({
//   NODE_ENV: z.enum(["development", "production"]),
  FOO: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
