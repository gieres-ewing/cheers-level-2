import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoriteIds = signal<string[]>(this.loadFavoriteIds());

  getFavoriteIds(): string[] {
    return this.favoriteIds();
  }

  toggleFavorite(id: string): void {
    const currentFavoriteIds = this.favoriteIds();
    if (currentFavoriteIds.includes(id)) {
      this.favoriteIds.set(currentFavoriteIds.filter((f) => f !== id));
    } else {
      this.favoriteIds.set([...currentFavoriteIds, id]);
    }
    this.saveFavoriteIds();
  }

  isFavorite(id: string): boolean {
    return this.favoriteIds().includes(id);
  }

  private loadFavoriteIds(): string[] {
    const favoriteIds = localStorage.getItem('favoriteIds');
    return favoriteIds ? JSON.parse(favoriteIds) : [];
  }

  private saveFavoriteIds(): void {
    localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds()));
  }
}
