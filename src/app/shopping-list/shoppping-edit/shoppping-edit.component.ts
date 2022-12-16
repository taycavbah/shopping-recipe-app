import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoppping-edit',
  templateUrl: './shoppping-edit.component.html',
  styleUrls: ['./shoppping-edit.component.css']
})
export class ShopppingEditComponent implements OnInit{

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingService){}

  ngOnInit(): void {}
  onAddItem(){
    // pass shopping list component - parent 
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName , ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
