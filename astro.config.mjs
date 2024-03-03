import { defineConfig } from 'astro/config';
import criticalCss from "astro-critical-css";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import min from "astro-min";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.futuremerce.com',
  integrations: [criticalCss(), sitemap(), robotsTxt(), min()]
});