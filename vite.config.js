export default {
  root: "src/",
  publicDir: "../static/",
  base: "/Solar-System/", // 👈 Correct for GitHub Pages
  server: {
    host: true,
    open: false,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
};
