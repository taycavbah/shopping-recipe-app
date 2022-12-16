import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShopppingEditComponent } from "./shopping-list/shoppping-edit/shoppping-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: "full"},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        //must have new before id or else it will
        // try to parse 'new' as an id
        // {path: ':new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]}, 
    {path: 'shopping-list', component: ShoppingListComponent, 
        children: [ {path: ':/edit', component: ShopppingEditComponent} ]
    }
]

// to make this an angular module add NgModule
@NgModule({
    imports: [
        // pass in our appRoutes to configure this router module anglar ships with 
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
// class purpose is to provide routing to our application
// bundle all routing functionality
export class AppRoutingModule {

}