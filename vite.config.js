import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    "name": "isOnline?",
    "short_name": "isOnline",
    "description": "Tells you if you are online or not",
    "background_color": "#fff",
    "theme_color": "#000",
    "icons": [
      {
       "src": "assets/icons/icon-48x48.png",
       "sizes": "48x48",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-72x72.png",
       "sizes": "72x72",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-96x96.png",
       "sizes": "96x96",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-128x128.png",
       "sizes": "128x128",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-144x144.png",
       "sizes": "144x144",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-152x152.png",
       "sizes": "152x152",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-192x192.png",
       "sizes": "192x192",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-384x384.png",
       "sizes": "384x384",
       "type": "image/png",
       "purpose": "maskable any"
       },
       {
       "src": "assets/icons/icon-512x512.png",
       "sizes": "512x512",
       "type": "image/png",
       "purpose": "maskable any"
       }
    ],
    "scope": "/",
    "start_url": "/",
    "display": "standalone",
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
