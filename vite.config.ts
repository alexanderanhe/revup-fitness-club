import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs';
import { VitePWA } from "vite-plugin-pwa";
import { VitePWAOptions } from 'vite-plugin-pwa';

const data = readFileSync('./public/manifest.json');
const manifestFile = JSON.parse(data.toString());
const includeAssets = manifestFile.icons.map((icon: {src: string}) => icon.src);

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets,
  manifest: manifestFile
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
