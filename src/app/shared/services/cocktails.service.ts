import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cocktail} from '../../models/cocktail';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(`/cocktails`);
  }

  getCocktail(id: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`/cocktails/${id}`);
  }
}
