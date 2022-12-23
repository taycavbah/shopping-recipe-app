import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs-compat';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoppping-edit',
  templateUrl: './shoppping-edit.component.html',
  styleUrls: ['./shoppping-edit.component.css']
})
export class ShopppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') shoppingListForm: NgForm; 
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingService){}


  ngOnInit(): void {
    // subscribe to start editing subject
    // why? : to find where we are editing (what index)
    this.shoppingListService.startedEditing
      .subscribe(
        // we know we will recieve index of itme we are ab to edit
        // this is triggered when we get submit the startedEditing info
        (index: number) => {
          // we only get this if we are editing (when the editing fx is called)
          // store the mode when here
          this.editedItemIndex = index; // store index of item we are editing
          this.editMode = true;
          // getting ingredient we are editing and storing it in local Ingredient value
          this.editedItem = this.shoppingListService.getIngredient(index);
          // reach out to form and set value
          // whenever we select a new item, we populate form with correct values
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
