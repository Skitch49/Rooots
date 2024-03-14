import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-rt-footer',
  templateUrl: './rt-footer.component.html',
  styleUrls: ['./rt-footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 800;
  }

  titleInfo = '';
  sitemap = '';
  titleLegislation = '';
  legalNotice = '';
  dataProtection = '';
  CGU = '';
  titleMember = '';
  becomeSeller = '';
  sponsorship = '';
  customerService = '';
  copyright = '';
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
    this.detectScreenSize();
  }

  updateLangage() {
    if (this.currentLangage == 'fr') {
      this.titleInfo = 'Informations';
      this.sitemap = 'Plan du site';
      this.titleLegislation = 'Législation';
      this.legalNotice = 'Mentions légales';
      this.dataProtection = 'Protection des données';
      this.CGU = 'CGU / CGV';
      this.titleMember = 'Membres';
      this.becomeSeller = 'Devenir vendeur';
      this.sponsorship = 'Programme parrainage';
      this.customerService = 'Service client';
      this.copyright = '2024 Rooots. Tous droits réservés.';
    } else {
      this.titleInfo = 'English please';
      this.sitemap = 'English please';
      this.titleLegislation = 'English please';
      this.legalNotice = 'English please';
      this.dataProtection = 'English please';
      this.CGU = 'English please';
      this.titleMember = 'English please';
      this.becomeSeller = 'English please';
      this.sponsorship = 'English please';
      this.customerService = 'English please';
      this.copyright = 'English please';
    }
  }
}
