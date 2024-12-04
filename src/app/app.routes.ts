import {Routes} from '@angular/router';
import {CocktailBrowserComponent} from '@browser/cocktail-browser.component';
import {CocktailOverviewComponent} from '@cocktail-overview/cocktail-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: CocktailBrowserComponent,
  },
  {
    path: `overview/:cocktailId`,
    component: CocktailOverviewComponent,
  },
];
