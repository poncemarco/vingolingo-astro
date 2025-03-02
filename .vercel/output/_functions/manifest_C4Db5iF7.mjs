import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dt20j77B.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_CvqpSew_.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/marco_cap/Documents/CurrentProjects/vingolingo-front/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/carrito","isIndex":false,"type":"page","pattern":"^\\/carrito\\/?$","segments":[[{"content":"carrito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carrito.astro","pathname":"/carrito","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/compra/exitosa","isIndex":false,"type":"page","pattern":"^\\/compra\\/exitosa\\/?$","segments":[[{"content":"compra","dynamic":false,"spread":false}],[{"content":"exitosa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compra/exitosa.astro","pathname":"/compra/exitosa","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/compra","isIndex":true,"type":"page","pattern":"^\\/compra\\/?$","segments":[[{"content":"compra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compra/index.astro","pathname":"/compra","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/items.json","isIndex":false,"type":"endpoint","pattern":"^\\/items\\.json\\/?$","segments":[[{"content":"items.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/items.json.ts","pathname":"/items.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/politicas","isIndex":false,"type":"page","pattern":"^\\/politicas\\/?$","segments":[[{"content":"politicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politicas.astro","pathname":"/politicas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/tyc","isIndex":false,"type":"page","pattern":"^\\/tyc\\/?$","segments":[[{"content":"tyc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tyc.astro","pathname":"/tyc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.Dxora9-t.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/catalogo/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/catalogo/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarDesktop.astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/carrito.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/carrito@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/catalogo/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/catalogo/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/categorias/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categorias/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/categorias/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categorias/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/exitosa.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/compra/exitosa@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/compra/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/compra/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/politicas.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/politicas@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/tyc.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tyc@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/catalogo/[slug]@_@astro":"pages/catalogo/_slug_.astro.mjs","\u0000@astro-page:src/pages/catalogo/[...page]@_@astro":"pages/catalogo/_---page_.astro.mjs","\u0000@astro-page:src/pages/categorias/[tag]/[page]@_@astro":"pages/categorias/_tag_/_page_.astro.mjs","\u0000@astro-page:src/pages/categorias/[...page]@_@astro":"pages/categorias/_---page_.astro.mjs","\u0000@astro-page:src/pages/items.json@_@ts":"pages/items.json.astro.mjs","\u0000@astro-page:src/pages/politicas@_@astro":"pages/politicas.astro.mjs","\u0000@astro-page:src/pages/tyc@_@astro":"pages/tyc.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/carrito@_@astro":"pages/carrito.astro.mjs","\u0000@astro-page:src/pages/compra/exitosa@_@astro":"pages/compra/exitosa.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/compra/index@_@astro":"pages/compra.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D1_kGib6.mjs","\u0000@astrojs-manifest":"manifest_C4Db5iF7.mjs","@/components/ui/ticket/Ticket":"_astro/Ticket.DXOVvgtN.js","@/components/ui/navbar/cart-button":"_astro/cart-button.CjXldll8.js","/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Xrd5l6X3.js","/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarSearch.astro?astro&type=script&index=0&lang.ts":"_astro/NavbarSearch.astro_astro_type_script_index_0_lang.DN_x7pjD.js","@astrojs/react/client.js":"_astro/client.tsPCJcN0.js","@/components//ui/carousel/MultiItemsCarousel":"_astro/MultiItemsCarousel.CU3ba5eK.js","@/components/ui/ticket/SendTicketForm":"_astro/SendTicketForm._xfNLczQ.js","@/components/ui/cards/CardCatalog":"_astro/CardCatalog.D22njS7L.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"desktop-navbar\"),n=document.getElementById(\"mobile-navbar\");function t(){if(!e||!n){console.error(\"Navbar elements not found\");return}window.innerWidth>768?(e.style.display=\"block\",n.style.display=\"none\"):(e.style.display=\"none\",n.style.display=\"block\")}t();window.addEventListener(\"resize\",t);"]],"assets":["/_astro/carrito.Dxora9-t.css","/favicon.svg","/full_logo.jpeg","/icons8-mercado-pago-48.png","/jumbotron_image.png","/logo_horizontal.png","/_astro/CardCatalog.D22njS7L.js","/_astro/CardCatalog.zUY_mDNr.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/MultiItemsCarousel.CU3ba5eK.js","/_astro/NavbarSearch.astro_astro_type_script_index_0_lang.DN_x7pjD.js","/_astro/SendTicketForm._xfNLczQ.js","/_astro/Ticket.DXOVvgtN.js","/_astro/cart-button.CjXldll8.js","/_astro/client.tsPCJcN0.js","/_astro/https.C8c32_Mh.js","/_astro/index.8CaI-_u4.js","/_astro/index.CnedwFZY.js","/_astro/index.CtEReY-d.js","/_astro/ticketStore.C29jF43W.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"eUWsoOpS1fvAb1CxFkpBnfznf5hLFVbu99LoHpzRx1Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
