import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CocktailBrowserComponent} from '@browser/cocktail-browser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CocktailBrowserComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
