import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),

        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            environmentVariables: [
                { name: "MY_APP_API_URL", default: "" },
                { name: "MY_APP_PALETTE", default: "dracula" }
            ]
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
