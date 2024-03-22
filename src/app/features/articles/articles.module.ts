import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from 'src/app/features/articles/articles/article/article.component';
import { ArticlesComponent } from 'src/app/features/articles/articles/articles.component';
import { RouterModule } from '@angular/router';
import { ARTICLES_ROUTES } from './articles.routes';
import { ShareArticleModule } from 'src/app/shared/modules/share-article/share-article.module';

@NgModule({
  declarations: [ArticlesComponent, ArticleComponent],
  imports: [CommonModule,ShareArticleModule, RouterModule.forChild(ARTICLES_ROUTES)],
})
export class ArticlesModule {}
