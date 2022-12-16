import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // using spread operator to spread our different ingredients into array
        // bc push can push an array but only as 1 single object
        // we want to 'flatten' the properties of that object and insert them
        // in the same way push can push multiple items to our ingredients array
        this.ingredients.push(...ingredients);
        // we have to emit that our ingredients changed - using copy of our array
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
    
}