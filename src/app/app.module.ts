import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { AppComponent } from './app.component';
import { FooterComponent } from './rt-footer/rt-footer.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TestComponent } from './test/test.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProductComponent } from './product/product.component';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';


//Design system
import { RtButtonComponent } from './design-system/button/rt-button/rt-button.component';
import { RtListComponent } from './design-system/rt-list/rt-list.component';
import { RtSearchButtonComponent } from './design-system/button/rt-search-button/rt-search-button.component';
import { RtCheckboxComponent } from './design-system/button/rt-checkbox/rt-checkbox.component';
import { RtMaterialCardComponent } from './design-system/cards/rt-material-card/rt-material-card.component';
import { RtHeaderMaterialComponent } from './design-system/cards/rt-header-material/rt-header-material.component';
import { RtNewsletterCardComponent } from './design-system/cards/rt-newsletter-card/rt-newsletter-card.component';
import { RtNavLinkComponent } from './design-system/navigation/rt-nav-link/rt-nav-link.component';
import { RtLanguageDropdownComponent } from './design-system/navigation/language-dropdown/rt-language-dropdown.component';
import { RtSearchBarComponent } from './design-system/navigation/rt-search-bar/rt-search-bar.component';
import { RtHeaderComponent } from './rt-header/rt-header.component';
import { RtInputTextComponent } from './design-system/navigation/rt-input-text/rt-input-text.component';

//Directive
import { SwiperDirective } from './shared/directives/swiper.directive';

//services
import { HttpClientModule } from '@angular/common/http';
import { ApiRoootsService } from './services/api-rooots.service';

//LocaleFr
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ConnexionComponent } from './connexion/connexion.component';
import { QuiSommesNousComponent } from './qui-sommes-nous/qui-sommes-nous.component';
import { RtTestimonialCardComponent } from './design-system/cards/rt-testimonial-card/rt-testimonial-card.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestComponent,
    SearchProductComponent,
    RtSearchButtonComponent,
    RtCheckboxComponent,
    RtListComponent,
    RtMaterialCardComponent,
    RtHeaderMaterialComponent,
    RtNewsletterCardComponent,
    RtNavLinkComponent,
    RtLanguageDropdownComponent,
    RtSearchBarComponent,
    RtHeaderComponent,
    RtInputTextComponent,
    ProductComponent,
    RtButtonComponent,
    InscriptionComponent,
    ConnexionComponent,
    RtTestimonialCardComponent,

    QuiSommesNousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [ApiRoootsService, { provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
