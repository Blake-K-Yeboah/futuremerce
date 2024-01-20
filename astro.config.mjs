import { defineConfig } from 'astro/config';

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  integrations: [criticalCss()]
});