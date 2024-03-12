import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-rt-newsletter-card',
  templateUrl: './rt-newsletter-card.component.html',
  styleUrls: ['./rt-newsletter-card.component.scss'],
})
export class RtNewsletterCardComponent implements OnInit{
  public isMobile: boolean = false;
  // mobile version
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }

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
    this._translator.translator.subscribe((response) => {
      this.currentLangage = response;
      this.updateLangage();
    });
  }
  ngOnInit(): void {
    this.detectScreenSize()
  }

  updateLangage() {
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
