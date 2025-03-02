import { f as fetchItems, a as fetchCategories } from '../chunks/items_nRyBIzIQ.mjs';
export { renderers } from '../renderers.mjs';

async function getItems() {
  try {
    const items = await fetchItems({ paginate: false });
    const categories = await fetchCategories();
    return {
      items,
      categories
    };
  } catch (error) {
    console.error("Error fetching items or categories:", error);
    throw error;
  }
}
async function GET({}) {
  try {
    const data = await getItems();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
