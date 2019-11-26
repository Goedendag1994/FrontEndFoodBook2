import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IngredientComponent } from 'src/domain/ingredient/ingredient.component';
import { ActivatedRoute } from '@angular/router'
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

//   constructor( 
//      private _recipeID : number,
//   private _recipeTitle : string,
//   // private _partOfDish : Array<Component>
//   ) { } 
  
//   ngOnInit() {
//  }
//   findByRecipe
//     get recipeId() : number {return this._recipeID}
//     get recipeTitle() : string { return this._recipeTitle}
//     // get allComponents() : Array<Component> {return this._partOfDish}


recipe: Recipe;

constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

ngOnInit() {
  this.activatedRoute.params.subscribe(
    params => { this.recipeService.findRecipeById(params['recipeId']).subscribe(
      (recipe:Recipe)=> {this.recipe=recipe},
      (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message),
      ()=>{}
    )
   }      
    , (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message)
    , () => { }
  )
}

}

