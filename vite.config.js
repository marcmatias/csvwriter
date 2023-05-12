import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "CsvWriterGen",
      fileName: () => `csvwritergen.js`,

      formats: ['umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: "csvwritergen.[ext]",
      },
    },
  },
});
