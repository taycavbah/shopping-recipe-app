import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('a test recipe',
         'eggs and potatoes', 
         'https://www.pngkit.com/view/u2q8e6w7y3e6o0q8_recipe-icon/',
         [
          new Ingredient('egg', 1),
          new Ingredient('japanese yam', 2)
         ]),
        new Recipe(
          'another test recipe',
           'meat and potatoes', 
           'https://www.pngkit.com/view/u2q8e6w7y3e6o0q8_recipe-icon/',
           [
            new Ingredient('bison', 1),
            new Ingredient('purple sweet potato', 1)
           ])
      ];

      constructor(private shoppingListService: ShoppingService){}

      getRecipes(){
        // returns a new array - a copy of the one inside this class
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
}