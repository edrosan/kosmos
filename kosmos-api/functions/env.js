// ? node version 20 or higher
// process.loadEnvFile();

export const env = (key) => {
  return process.env[key];
}