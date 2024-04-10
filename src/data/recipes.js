import { get, post, put } from "./request.js"

const endpoints = {
    recipes: "/classes/recipes",
    recipeById: "/classes/recipes/" 
}

/**
 * @returns {Promise<{results: RecipeModel[]}>}
 */

export async function getAllRecipes() {
     return get(endpoints.recipes)
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<RecipeModel>}
 */
export async function getRecipeById(id) {
    return get(endpoints.recipeById + id)
}

/**
 * 
 * @param {RecipeModel} data 
 */

export async function createRecipe(data) {
    post(endpoints.recipes, data)
}

/**
 * @param {RecipeModel} data
 * @param {string} id 
 */

export async function editRecipe(data, id) {
      put(endpoints.recipeById + id, data)
}

/**
 * 
 * @param {import("@src/types.js").PointerData} pointer 
 * @returns {import("./request.js").Pointer}
 */


export function createPointer(pointer) {
   const owner = {
       "__type": pointer.type,
       "className": pointer.colection,
       "objectId": pointer.ownerId    
   }
   return owner
}

/**
 * @typedef {Object} RecipeModel
 * @property {string=} objectId
 * @property {import("./request").Pointer=} owner
 * @property {string} name
 * @property {string} img
 * @property {string[]} ingredients
 * @property {string[]} steps
 */