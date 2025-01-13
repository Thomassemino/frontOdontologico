import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_aGoVnY7t.mjs';
import { manifest } from './manifest_DIYTO7Pj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/authentication/sign-in.astro.mjs');
const _page2 = () => import('./pages/citastable.astro.mjs');
const _page3 = () => import('./pages/consulta.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/empleados.astro.mjs');
const _page6 = () => import('./pages/favicon.svg.astro.mjs');
const _page7 = () => import('./pages/login.astro.mjs');
const _page8 = () => import('./pages/logup.astro.mjs');
const _page9 = () => import('./pages/nueva-cita.astro.mjs');
const _page10 = () => import('./pages/pacientes.astro.mjs');
const _page11 = () => import('./pages/pages/404.astro.mjs');
const _page12 = () => import('./pages/tratamiento.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.6_@types+node@22._b9f7b3512161865ac841b349a67bfa8a/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/authentication/sign-in.astro", _page1],
    ["src/pages/citasTable.astro", _page2],
    ["src/pages/consulta.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/empleados.astro", _page5],
    ["src/pages/favicon.svg.ts", _page6],
    ["src/pages/login.astro", _page7],
    ["src/pages/logup.astro", _page8],
    ["src/pages/nueva-cita.astro", _page9],
    ["src/pages/pacientes.astro", _page10],
    ["src/pages/pages/404.astro", _page11],
    ["src/pages/tratamiento.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3ba6913b-f799-4f19-8fc0-40efa86ee36a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
