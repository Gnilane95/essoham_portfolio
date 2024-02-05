export default function manifest(req, res) {
  let manifest = {
    name: "Essoham ALI Portfolio",
    short_name: "Essoham ALI",
    description:
      "Essoham ALI, PhD in Applied Mathematics, currently Temporary Research and Teaching Assistant (ATER), here is my portfolio outlining my background and research.",
    start_url: "/",
    display: "standalone",
    background_color: "#2a303c",
    theme_color: "#2a303c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  res.send(manifest);
}
