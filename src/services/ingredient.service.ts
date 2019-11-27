import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { IngredientComponent } from 'src/domain/ingredient/ingredient.component';

@Injectable({
    providedIn: 'root'
})

export class IngredientService{
    httpOptions = { headers : new HttpHeaders ({'content-type' : 'application/json'})}
    constructor(private http:HttpClient){}

    public findAll(): Observable<IngredientComponent[]>{
        return this.http.get<IngredientComponent[]>(`${environment.foodbookUrl}recipe`)
    }
}