import { html } from "@lit-html/lit-html.js"

export const loading = () => html`<P style="color: white">Loading...</P>`;

/**
 * @param {import("@src/data/recipes").RecipeModel} recipe
 */

export const recipeCard = (recipe) => html`
<a href="/details/${recipe.objectId}">
   <article>
      <div class="title">
         <h2>${recipe.name}</h2>
      </div>
      <div class="small">
       <img src=${recipe.img} >
      </div>
   </article>
</a>
`;

export const ingredientItemTemp = (text) => html`
<li>${text}</li>
`;

export const preparationStepTemp = (text) => html`
<p>${text}</p>
`;