import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { PartOfDishComponent } from 'src/domain/part-of-dish/part-of-dish.component';

@Injectable({
    providedIn: 'root'
  })

export class PartofdishService {
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) }
    constructor(private http:HttpClient){ }

    public findAll(): Observable<PartOfDishComponent[]>{
        return this.http.get<PartOfDishComponent[]>(`${environment.foodbookUrl}partofdish`);
    }


}
