// Cache-busting for GitHub Pages: writes an import map into index.html that maps every JavaScript module
// to "<file>?v=<hash of its content>", and stamps the stylesheet and the entry script the same way.
// A browser then refetches exactly the files that changed, including modules imported by other modules
// and the case modules loaded with import(). Run before every commit:  node tools/stamp.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const hash = (f) => createHash("sha1").update(readFileSync(join(root, f))).digest("hex").slice(0, 8);
const walk = (dir) => readdirSync(join(root, dir)).flatMap((n) => {
  const p = join(dir, n);
  return statSync(join(root, p)).isDirectory() ? walk(p) : p.endsWith(".js") ? [p] : [];
});
const files = [...walk("js"), ...walk("cases")].map((f) => relative(".", f)).sort();
const imports = Object.fromEntries(files.map((f) => [`./${f}`, `./${f}?v=${hash(f)}`]));

let html = readFileSync(join(root, "index.html"), "utf8");
const map = `<script type="importmap">\n${JSON.stringify({ imports }, null, 1)}\n  </script>`;
const block = /<!-- importmap -->[\s\S]*?<!-- \/importmap -->/;
const tagged = `<!-- importmap -->\n  ${map}\n  <!-- /importmap -->`;
html = block.test(html) ? html.replace(block, tagged) : html.replace(/(\s*)(<script type="module")/, `$1${tagged}$1$2`);
html = html.replace(/css\/style\.css\?v=[\w]+/, `css/style.css?v=${hash("css/style.css")}`);
html = html.replace(/js\/main\.js\?v=[\w]+/, `js/main.js?v=${hash("js/main.js")}`);
writeFileSync(join(root, "index.html"), html);
console.log(`stamped ${files.length} modules`);
