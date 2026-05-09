import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import babel from "@rolldown/plugin-babel";

const ReactCompilerConfig = {
  target: "19",
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      tailwindcss(),
      reactRouter(),
      {
        ...babel({
          include: /\.(ts|tsx)$/,
          presets: ["@babel/preset-typescript"],
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
          sourceMap: !isProduction,
        }),
        apply: "build",
      },
      analyzer(),
    ],
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      emptyOutDir: true,
      sourcemap: !isProduction,
      minify: true,
      cssMinify: true,
    },
  };
});
