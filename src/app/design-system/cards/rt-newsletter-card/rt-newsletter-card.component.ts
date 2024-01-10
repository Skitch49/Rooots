import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-rt-newsletter-card',
  templateUrl: './rt-newsletter-card.component.html',
  styleUrls: ['./rt-newsletter-card.component.scss'],
})
export class RtNewsletterCardComponent {
  titleCard = '';
  paraCard = '';
  placeholder = '';
  subscribe = '';
  currentLangage: any = '';
  constructor(public _translator: TranslateService) {
    this.currentLangage = localStorage.getItem('langage');
    if (this.currentLangage) {
      this._translator.getTranslation(this.currentLangage);
    }
    console.log(this.currentLangage);
    this._translator.translator.subscribe((response) => {
      this.currentLangage = response;
      this.updateLangage();
    });
  }

  updateLangage() {
    console.log(this.currentLangage);
    if (this.currentLangage == 'fr') {
      this.titleCard = 'Abonnez-vous à la newsletter';
      this.paraCard = `Recevez les actualités durables et les offres exclusives en vous
      abonnant à notre newsletter.`;
      this.placeholder = 'Votre adresse mail';
      this.subscribe = `S'abonner`;
    } else {
      this.titleCard = 'English please';
      this.paraCard = 'English please';
      this.placeholder = 'English please';
      this.subscribe = 'Subscribe';
    }
  }
}
