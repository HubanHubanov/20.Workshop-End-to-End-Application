import { html } from "@lit-html/lit-html.js";
import { recipeCard } from "@src/views/partials.js";

const catalogTemplate = (recipes) => html`
<section id="catalog">
    ${recipes.map(recipeCard)}
</section>
`;
/**
  * @param {import("@src/types").PageContext} ctx 
  */


export function showCatalog(ctx) {

    const recipes = ctx.data;

    ctx.render(catalogTemplate(recipes.results))
}