import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // holds array of type Recipe which we defined in our recipe.models.ts
  // which we imported above 
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'eggs and potatoes', 'https://www.pngkit.com/view/u2q8e6w7y3e6o0q8_recipe-icon/')
  ];

  constructor(){}


  ngOnInit(){}

}
