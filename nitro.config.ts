import { defineConfig } from "nitro";

export default defineConfig({
  preset: "vercel",
  publicAssets: [
    {
      dir: "./dist/client",
      baseURL: "/",
    },
  ],
  handlers: [
    {
      route: "/**",
      handler: "./src/server.ts",
    },
  ],
});
