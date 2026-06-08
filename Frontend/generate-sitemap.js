import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://www.bspprojectsolutions.co.in";

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

sitemap.write({
  url: "/",
  lastmod: new Date().toISOString(),
  changefreq: "weekly",
  priority: 1.0,
});

sitemap.write({
  url: "/services/on-grid-solar-system",
  lastmod: new Date().toISOString(),
  changefreq: "monthly",
  priority: 0.9,
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated successfully!");
});