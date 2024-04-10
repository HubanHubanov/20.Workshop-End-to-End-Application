import { html } from "@lit-html/lit-html.js";
import { goTo } from "@src/app.js";
import { createPointer, editRecipe } from "@src/data/recipes.js";
import { createSubmitHandler } from "@src/util.js";
/**
 * 
 * @param {import("@src/data/recipes").RecipeModel} item 
 * @param {Object} handler
 */


const editTemp = (item, handler) => html`
<section id="edit">
            <article>
                <h2>Edit Recipe</h2>
                <form  @submit=${handler}>
                    <label>Name: <input type="text" name="name" placeholder="Recipe name" .value=${item.name}></label>
                    <label>Image: <input type="text" name="img" placeholder="Image URL" .value=${item.img}></label>
                    <label class="ml">Ingredients: <textarea name="ingredients"
                            placeholder="Enter ingredients on separate lines" .value=${item.ingredients.join(", ")}></textarea></label>
                    <label class="ml">Preparation: <textarea name="steps"
                            placeholder="Enter preparation steps on separate lines" .value=${item.steps.join(". ")}></textarea></label>
                    <input type="submit" value="Update Recipe">
                </form>
            </article>
        </section>
        `;

let id = null
let useerData = null
export function showEdit(ctx) {
    const handler = createSubmitHandler()
    ctx.render(editTemp(ctx.data, handler));
    id = ctx.params.id;
    userData = ctx.user
}

function onEdit(data, form) {

    /**
     * @type {import("@src/data/recipes.js").RecipeModel}
     */

    const prepData = {
        name: data.name,
        img: data.img,  
        ingredients: data.ingredients.split(", "),
        steps: data.steps.split(". "),
      
       }

    editRecipe(prepData, id);
    goTo(`/details/${id}`)
}