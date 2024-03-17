import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TestComponent } from './test/test.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'test', component: TestComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'search-product', component: SearchProductComponent },
  { path: 'actualites', component: ArticlesComponent },
  { path: 'actualites/:actu', component: ArticleComponent },
  { path: ':categorie/:subcategorie', component: SearchProductComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
