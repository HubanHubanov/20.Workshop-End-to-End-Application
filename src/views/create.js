import { html } from "@lit-html/lit-html.js";
import { goTo } from "@src/app.js";
import { createPointer, createRecipe } from "@src/data/recipes.js";
import { createSubmitHandler } from "@src/util.js";

const createTemp = (handler) => html`
<section id="create">
            <article>
                <h2>New Recipe</h2>
                <form>
                    <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
                    <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
                    <label class="ml">Ingredients: <textarea name="ingredients"
                            placeholder="Enter ingredients on separate lines"></textarea></label>
                    <label class="ml">Preparation: <textarea name="steps"
                            placeholder="Enter preparation steps on separate lines"></textarea></label>
                    <input type="submit" value="Create Recipe">
                </form>
            </article>
        </section>
`;

let userData = null

/**
 * @param {import("@src/types").PageContext} ctx
 */

export function showCreate(ctx) {
   ctx.render(createTemp(createSubmitHandler(onCreate)));
   userData = ctx.user
}

/**
 * 
 * @param {Object} data 
 * @param {Object} form 
 */

function onCreate(data, form) {
   if(!data.name || !data.img || !data.ingredients || !data.steps) {
    return alert("All fields are required");
   }

   const pointer = createPointer({type: "Pointer", colection: "_User", ownerId : userData.objectId})

    /**
     * @type {import("@src/data/recipes.js").RecipeModel}
     */

   const prepData = {
    name: data.name,
    img: data.img,  
    ingredients: data.ingredients.split(", "),
    steps: data.steps.split(". "),
    owner: pointer,
   }
   createRecipe(prepData);
   goTo("/")
}