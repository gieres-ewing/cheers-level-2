import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, Observable, combineLatest, map} from 'rxjs';
import {CocktailsService} from '@shared/services/cocktails.service';
import {CocktailCardComponent} from './cocktail-card/cocktail-card.component';
import {Cocktail} from '@models/cocktail';

@Component({
  selector: 'app-cocktail-browser',
  standalone: true,
  imports: [CommonModule, CocktailCardComponent],
  templateUrl: './cocktail-browser.component.html',
  styleUrl: './cocktail-browser.component.scss',
})
export class CocktailBrowserComponent {
  cocktails$: Observable<Cocktail[]> = this.cocktailsService.getCocktails();

  userInput = new BehaviorSubject<string>('');

  filteredCocktails$: Observable<Cocktail[]> = combineLatest([
    this.cocktails$,
    this.userInput,
  ]).pipe(
    map(([cocktails, userInput]) =>
      cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(userInput),
      ),
    ),
  );

  constructor(private cocktailsService: CocktailsService) {}

  updateFilter(text: string) {
    this.userInput.next(text);
  }
}
