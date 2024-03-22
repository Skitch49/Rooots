import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { TestComponent } from './test/test.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'test', component: TestComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'search-product', component: SearchProductComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'actualites', loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule) },
  { path: ':categorie/:subcategorie', component: SearchProductComponent },
  { path: '**', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
