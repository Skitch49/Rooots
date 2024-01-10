import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'search-product', component: SearchProductComponent },
  { path: ':categorie/:subcategorie', component: SearchProductComponent },
  { path: '**', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Example Cocktail app

// import { Routes } from '@angular/router';
// import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
// import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
// import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
// import { PanierContainerComponent } from './panier-container/panier-container.component';

// export const APP_ROUTES: Routes = [
//   { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
//   {
//     path: 'cocktails',
//     component: CocktailContainerComponent,
//     children: [
//       { path: 'new', component: CocktailFormComponent },
//       { path: ':index/edit', component: CocktailFormComponent },
//       { path: ':index', component: CocktailDetailsComponent },
//       { path: '', redirectTo: '0', pathMatch: 'full' },
//     ],
//   },
//   { path: 'panier', component: PanierContainerComponent },
// ];
