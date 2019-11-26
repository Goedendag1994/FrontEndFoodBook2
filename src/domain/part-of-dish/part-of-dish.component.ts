import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { RecipeComponent } from 'src/app/recipe/recipe.component';

export class PartOfDishComponent{

//   constructor(
//     private _partOfDishId : number,
//     private _ingredient : IngredientComponent,
//     private _unit : string,
//     private _quantity : number
//   ) { }

//   get partOfDishId() : number {return this._partOfDishId}
//   get ingredient() : IngredientComponent{return this._ingredient}
//   get unit() : string {return this._unit}
//   get quantity() : number {return this._quantity}

//   ngOnInit() {
//   }

// }
private _partOfDishId: number;
private _ingredient: IngredientComponent;
private _unit: string;
private _quantity: number;
private _recipe: RecipeComponent;

constructor(partOfDishId: number, ingredient: IngredientComponent, unit: string, quantity: number, recipe: RecipeComponent){
    this._partOfDishId = partOfDishId;
    this._ingredient = ingredient;
    this._unit = unit;
    this._quantity = quantity;
    this._recipe = recipe;
}

/**Getter partOfDishId
 * @return {number}
 */
public get partOfDishId(): number{
    return this._partOfDishId;
}

/**
 * Setter partOfDishId
 * @param {number}
 */
public set partOfDishId(value: number){
    this._partOfDishId = value;
}

/**
 * Getter ingredient
 * @return {Ingredient}
 */
public get ingredientComponent(): IngredientComponent{
    return this._ingredient;
}

/**
 * Setter ingredient
 * @param {Ingredient}
 */
public set ingredient (value: IngredientComponent){
    this._ingredient = value;
}

/**
 * Getter unit
 * @return {string}
 */
public get unit(): string{
    return this._unit;
}

/**
 * Setter unit
 * @param {string}
 */
public set unit(value: string){
    this._unit = value;
}

/**
 * Getter quantity
 * @return {number}
 */
public get quantity(): number{
    return this._quantity;
}

/**
 * Setter quantity
 * @param {number}
 */
public set quantity(value: number){
    this._quantity = this.quantity;
}

/**
 * Getter recipe
 * @return {Recipe}
 */
public get recipe(): RecipeComponent{
    return this._recipe;
}

/**
 * Setter recipe
 * @param {Recipe}
 */
public set recipe(value: RecipeComponent){
    this._recipe = value;
}


public toJSON(){
    return{
        partOfDishId: this.partOfDishId,
        Ingredient: this.ingredient,
        unit: this.unit,
        quantity: this.quantity,
        recipe: this.recipe
    };
}

}

