import { S as SITE_URL } from './https_CioBuwQb.mjs';

const fetchItems = async ({
  pageSize = "25",
  paginate = true,
  categories = []
}) => {
  let queryParameter = ``;
  const paginateParameter = paginate ? `?page_size=${pageSize}` : "?paginate=false";
  const categoryOptions = categories ? categories.join(",") : "";
  const categoriesParameter = categories ? `&category=${categoryOptions}` : "";
  queryParameter = categoriesParameter ? `${paginateParameter}${categoriesParameter}` : paginateParameter;
  try {
    const res = await fetch(`${SITE_URL}/api/v1/items/${queryParameter}`);
    const resJson = await res.json();
    if (resJson.results) {
      return resJson.results;
    } else {
      return resJson;
    }
  } catch (error) {
    return [];
  }
};
const fetchCategories = async () => {
  const res = await fetch(`${SITE_URL}/api/v1/categories/`);
  const categories = await res.json();
  return categories.sort((a, b) => b.number_of_items - a.number_of_items);
};

export { fetchCategories as a, fetchItems as f };
