import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BSNHiMeg.mjs';
import { manifest } from './manifest_C4Db5iF7.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/carrito.astro.mjs');
const _page3 = () => import('./pages/catalogo/_slug_.astro.mjs');
const _page4 = () => import('./pages/catalogo/_---page_.astro.mjs');
const _page5 = () => import('./pages/categorias/_tag_/_page_.astro.mjs');
const _page6 = () => import('./pages/categorias/_---page_.astro.mjs');
const _page7 = () => import('./pages/compra/exitosa.astro.mjs');
const _page8 = () => import('./pages/compra.astro.mjs');
const _page9 = () => import('./pages/items.json.astro.mjs');
const _page10 = () => import('./pages/politicas.astro.mjs');
const _page11 = () => import('./pages/tyc.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/carrito.astro", _page2],
    ["src/pages/catalogo/[slug].astro", _page3],
    ["src/pages/catalogo/[...page].astro", _page4],
    ["src/pages/categorias/[tag]/[page].astro", _page5],
    ["src/pages/categorias/[...page].astro", _page6],
    ["src/pages/compra/exitosa.astro", _page7],
    ["src/pages/compra/index.astro", _page8],
    ["src/pages/items.json.ts", _page9],
    ["src/pages/politicas.astro", _page10],
    ["src/pages/tyc.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0cc46f15-9fcf-4583-980c-f04621bc7476",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
