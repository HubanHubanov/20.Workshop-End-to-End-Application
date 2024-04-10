import { html } from "@lit-html/lit-html.js";
import { ingredientItemTemp, preparationStepTemp } from "./partials.js";

/**
 * 
 * @param {import("@src/data/recipes").RecipeModel} item 
 * @returns {Object}
 */

const detailsTemp = (item) => html` 
<section id="deteils">
    <article>
    <h2>${item.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="../assets/${item.img}.jpg">
       </div>  
       <div class="ingredients">
        <h3>Ingredients</h3>
        <ul>
            ${item.ingredients.map(ingredientItemTemp)}
        </ul> 
      </div>
      </div> 
      <div class="description">
        <h3>Preparation</h3>
        ${item.steps.map(preparationStepTemp)}
      </div>
      <div class="details actionBtn">
          <a class="editAnchor" href="/edit/${item.objectId}">Edit</a>
          <a class="deleteAnchor" href="delete">Delete</a>

      </div>
</article>
</section>

`;

export function showDetails(ctx) {
   ctx.render(detailsTemp(ctx.data))
}