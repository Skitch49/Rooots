import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './rt-footer/rt-footer.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TestComponent } from './test/test.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';

//Material
import {MatIconModule} from '@angular/material/icon';


//Design system
import { RtButtonComponent } from './design-system/button/rt-button/rt-button.component';
import { RtListComponent } from './design-system/rt-list/rt-list.component';
import { RtHightlightCardComponent } from './design-system/cards/rt-hightlight-card/rt-hightlight-card.component';
import { RtSearchButtonComponent } from './design-system/button/rt-search-button/rt-search-button.component';
import { RtCheckboxComponent } from './design-system/button/rt-checkbox/rt-checkbox.component';
import { RtProximityCardComponent } from './design-system/cards/rt-proximity-card/rt-proximity-card.component';
import { RtArticleComponent } from './design-system/cards/rt-article/rt-article.component';
import { RtMaterialCardComponent } from './design-system/cards/rt-material-card/rt-material-card.component';
import { RtHeaderMaterialComponent } from './design-system/cards/rt-header-material/rt-header-material.component';
import { RtTestimonialCardComponent } from './design-system/cards/rt-testimonial-card/rt-testimonial-card.component';
import { RtNewsletterCardComponent } from './design-system/cards/rt-newsletter-card/rt-newsletter-card.component';
import { RtNavLinkComponent } from './design-system/navigation/rt-nav-link/rt-nav-link.component';
import { RtLanguageDropdownComponent } from './design-system/navigation/language-dropdown/rt-language-dropdown.component';
import { RtSearchBarComponent } from './design-system/navigation/rt-search-bar/rt-search-bar.component';
import { RtHeaderComponent } from './rt-header/rt-header.component';
import { RtInputTextComponent } from './design-system/navigation/rt-input-text/rt-input-text.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SwiperDirective } from './shared/directives/swiper.directive';
import { ProductComponent } from './product/product.component';


//services
import { HttpClientModule } from '@angular/common/http';
import { ApiRoootsService } from './services/api-rooots.service';
import { ArticlesComponent } from './articles/articles.component';


// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TestComponent,
    SearchProductComponent,
    RtButtonComponent,
    RtSearchButtonComponent,
    RtCheckboxComponent,
    RtListComponent,
    RtHightlightCardComponent,
    RtProximityCardComponent,
    RtArticleComponent,
    RtMaterialCardComponent,
    RtHeaderMaterialComponent,
    RtTestimonialCardComponent,
    RtNewsletterCardComponent,
    RtNavLinkComponent,
    RtLanguageDropdownComponent,
    RtSearchBarComponent,
    RtHeaderComponent,
    RtInputTextComponent,
    ConnexionComponent,
    InscriptionComponent,
    SwiperDirective,
    ProductComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ApiRoootsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
