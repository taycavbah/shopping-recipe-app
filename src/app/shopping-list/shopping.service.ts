import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      getIngredient(index: number) {
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        // emit updated ingredients
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // using spread operator to spread our different ingredients into array
        // bc push can push an array but only as 1 single object
        // we want to 'flatten' the properties of that object and insert them
        // in the same way push can push multiple items to our ingredients array
        this.ingredients.push(...ingredients);
        // we have to emit that our ingredients changed - using copy of our array
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
}