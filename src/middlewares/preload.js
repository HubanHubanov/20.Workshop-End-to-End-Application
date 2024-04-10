import {  getAllRecipes, getRecipeById } from "@src/data/recipes.js"

/**
 * Fetch data from da remote and store it in the context under "data"
 * @param {"recipes" | "comments"} collection 
 * @param {string=} objectId
 * @returns  
*/


export function preload(collection, objectId) { 
     return async function(ctx, next) {
      if(collection == "recipes") {
           ctx.data = await queryRecipes(ctx.params?.id)
      }
      next()
    } 
     }

async function queryRecipes(id) {
    if(id) {
        return getRecipeById(id)
    } else {
        return getAllRecipes()
    }
}