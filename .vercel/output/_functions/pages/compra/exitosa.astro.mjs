import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Eq8BNuUw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../../renderers.mjs';

const OrderSuccessMessage = ({ orderId }) => /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center text-green-500 font-medium my-24", children: /* @__PURE__ */ jsxs("div", { className: "w-full container mx-auto my-8 p-8 rounded shadow-lg", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center sm:my-10", children: [
    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-circle-check", width: "40", height: "40", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
      /* @__PURE__ */ jsx("path", { d: "M9 12l2 2l4 -4" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "ml-2", children: "Gracias por tu compra" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-check", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M5 12l5 5l10 -10" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx("h2", { className: "text-gray-900 text-lg font-semibold dark:text-white", children: "Ya recibimos tu pedido" }) })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-check", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M5 12l5 5l10 -10" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx("h2", { className: "text-gray-900 text-lg font-semibold dark:text-white", children: "Ya tratamos de contactarte vía Whatsapp o SMS." }) })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-receipt-2", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }),
      /* @__PURE__ */ jsx("path", { d: "M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsxs("h2", { className: "text-gray-900 text-lg font-semibold dark:text-white", children: [
      "Este es tu número de pedido: ",
      /* @__PURE__ */ jsx("span", { className: "font-bold", children: orderId.id })
    ] }) })
  ] })
] }) });

const $$Exitosa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Compra exitosa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OrderSuccessMessage", OrderSuccessMessage, { "orderId": "2" })} ` })}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/exitosa.astro", void 0);

const $$file = "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/exitosa.astro";
const $$url = "/compra/exitosa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Exitosa,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
