import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.tsx"),
			name: "ReactJsPopover",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		sourcemap: true,
		outDir: "dist",
	},
});
