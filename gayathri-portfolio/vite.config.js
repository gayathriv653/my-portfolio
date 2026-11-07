import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "portfolio-static-fallbacks",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const publicDir = path.resolve(__dirname, "public");

          // Handle resume case matching
          if (req.url === "/resume.pdf" && !fs.existsSync(path.join(publicDir, "resume.pdf"))) {
            if (fs.existsSync(path.join(publicDir, "Resume.pdf"))) {
              req.url = "/Resume.pdf";
            }
          } else if (req.url === "/Resume.pdf" && !fs.existsSync(path.join(publicDir, "Resume.pdf"))) {
            if (fs.existsSync(path.join(publicDir, "resume.pdf"))) {
              req.url = "/resume.pdf";
            }
          }

          // Handle profile image format matching
          if (req.url === "/profile.jpg" && !fs.existsSync(path.join(publicDir, "profile.jpg"))) {
            if (fs.existsSync(path.join(publicDir, "profile.jpeg"))) {
              req.url = "/profile.jpeg";
            }
          } else if (req.url === "/profile.jpeg" && !fs.existsSync(path.join(publicDir, "profile.jpeg"))) {
            if (fs.existsSync(path.join(publicDir, "profile.jpg"))) {
              req.url = "/profile.jpg";
            }
          }

          next();
        });
      },
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        if (!fs.existsSync(distDir)) return;

        // Ensure both resume casing variants exist in dist
        const upperResume = path.join(distDir, "Resume.pdf");
        const lowerResume = path.join(distDir, "resume.pdf");
        if (fs.existsSync(upperResume) && !fs.existsSync(lowerResume)) {
          fs.copyFileSync(upperResume, lowerResume);
        } else if (fs.existsSync(lowerResume) && !fs.existsSync(upperResume)) {
          fs.copyFileSync(lowerResume, upperResume);
        }

        // Ensure both profile image extension variants exist in dist
        const jpegProfile = path.join(distDir, "profile.jpeg");
        const jpgProfile = path.join(distDir, "profile.jpg");
        if (fs.existsSync(jpegProfile) && !fs.existsSync(jpgProfile)) {
          fs.copyFileSync(jpegProfile, jpgProfile);
        } else if (fs.existsSync(jpgProfile) && !fs.existsSync(jpegProfile)) {
          fs.copyFileSync(jpgProfile, jpegProfile);
        }
      },
    },
  ],
});
