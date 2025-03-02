import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8"> <div class="flex flex-col justify-center"> <h1 class="text-4xl font-bold text-center text-indigo-900 dark:text-white">${title}</h1> <p class="my-4  mx-2 text-center text-gray-600 text-xl dark:text-gray-100">${description}</p> </div> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/text/SectionTitle.astro", void 0);

export { $$SectionTitle as $ };
