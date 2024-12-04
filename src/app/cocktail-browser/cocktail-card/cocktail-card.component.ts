import {Component, Input, computed} from '@angular/core';
import {Router} from '@angular/router';
import {Cocktail} from '@models/cocktail';
import {FavoritesService} from '@shared/services/favorites.service';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
})
export class CocktailCardComponent {
  @Input({required: true}) cocktail: Cocktail;

  constructor(
    private favoritesService: FavoritesService,
    private router: Router,
  ) {}

  isFavorite = computed(() =>
    this.favoritesService.isFavorite(this.cocktail.id),
  );

  toggleFavorite(cocktailId: string, event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(cocktailId);
  }

  goToOverview(cocktailId: string): void {
    this.router.navigate([`overview/${cocktailId}`]);
  }
}
