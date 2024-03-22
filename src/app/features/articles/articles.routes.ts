import { Routes } from '@angular/router';
import { ArticleComponent } from 'src/app/features/articles/articles/article/article.component';
import { ArticlesComponent } from 'src/app/features/articles/articles/articles.component';

export const ARTICLES_ROUTES: Routes = [
  { path: '', component: ArticlesComponent },
  { path: ':actu', component: ArticleComponent },
];
