import { NgModule } from '@angular/core';
import { RtArticleComponent } from 'src/app/design-system/cards/rt-article/rt-article.component';
import { ShortDescPipe } from 'src/app/shared/pipe/short-desc.pipe';

@NgModule({
  declarations: [RtArticleComponent, ShortDescPipe],
  exports: [RtArticleComponent, ShortDescPipe]
})
export class ShareArticleModule {}
