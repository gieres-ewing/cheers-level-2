import {CommonModule} from '@angular/common';
import {Component, OnInit, computed} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cocktail} from '@models/cocktail';
import {LetDirective} from '@shared/directives/nglet.directive';
import {CocktailsService} from '@shared/services/cocktails.service';
import {FavoritesService} from '@shared/services/favorites.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cocktail-overview',
  standalone: true,
  imports: [CommonModule, LetDirective],
  templateUrl: './cocktail-overview.component.html',
  styleUrl: './cocktail-overview.component.scss',
})
export class CocktailOverviewComponent {
  get id(): string {
    return this.route.snapshot.paramMap.get('cocktailId') ?? '';
  }

  cocktail$: Observable<Cocktail> = this.cocktailsService.getCocktail(this.id);

  constructor(
    private cocktailsService: CocktailsService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService,
  ) {}

  isFavorite = computed(() => this.favoritesService.isFavorite(this.id));

  toggleFavorite(cocktailId: string): void {
    this.favoritesService.toggleFavorite(cocktailId);
  }

  goToBrowser() {
    this.router.navigate(['']);
  }
}
