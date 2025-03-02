import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardCategory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardCategory;
  const { id, name, numberOfItems, image } = Astro2.props;
  const imageUrl = image && image.image_path && image.image_path.primary ? image.image_path.primary : "/images/placeholder.png";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm bg-local border-gray-200 rounded-lg shadow h-64 w-100 dark:bg-gray-800 dark:border-gray-700"${addAttribute(`background-image: url(${imageUrl});  background-size: cover`, "style")}> <a${addAttribute(`/categorias/${name.toLocaleLowerCase()}/1`, "href")}> <div class="flex flex-col justify-between h-full p-4 bg-white bg-opacity-5 dark:bg-gray-900 dark:bg-opacity-30"> <div> <h3 class="text-4xl text-gray-100 font-semibold dark:text-gray-200">${name}</h3> <p class="text-sm text-gray-100 dark:text-gray-300">${numberOfItems} productos</p> </div> </div> </a> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/cards/CardCategory.astro", void 0);

export { $$CardCategory as $ };
