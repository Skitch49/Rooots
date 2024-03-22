import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/features/home/home/home.component';
import { RtHightlightCardComponent } from 'src/app/design-system/cards/rt-hightlight-card/rt-hightlight-card.component';
import { RtProximityCardComponent } from 'src/app/design-system/cards/rt-proximity-card/rt-proximity-card.component';
import { RtTestimonialCardComponent } from 'src/app/design-system/cards/rt-testimonial-card/rt-testimonial-card.component';
import { SwiperDirective } from 'src/app/shared/directives/swiper.directive';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { register } from 'swiper/element/bundle';
import { ShareArticleModule } from 'src/app/shared/modules/share-article/share-article.module';
register();

@NgModule({
  declarations: [
    HomeComponent,
    RtProximityCardComponent,
    RtHightlightCardComponent,
    RtTestimonialCardComponent,
    SwiperDirective,
    
  ],
  imports: [
    CommonModule,
    ShareArticleModule,
    RouterModule.forChild(HOME_ROUTES),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
