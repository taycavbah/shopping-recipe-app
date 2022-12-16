import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void { 
    this.route.params
      .subscribe (
          (params: Params) => {
            this.id = +params['id'];
            // does it have id
            // id will only be not undefined if we are in edit mode, id is present
            // if returns true, so id is undefined and = null, this will return false bcc this is checking opposite
            // and will be in new mode
            this.editMode = params['id'] !== null;
            console.log(this.editMode);
          }
      )
   }

}
