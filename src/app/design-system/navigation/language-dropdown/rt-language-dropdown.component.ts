import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-rt-language-dropdown',
  templateUrl: './rt-language-dropdown.component.html',
  styleUrls: ['./rt-language-dropdown.component.scss'],
})
export class RtLanguageDropdownComponent {
  currentLangage: string = '';

  constructor(public _translator: TranslateService) {
    this.currentLangage = localStorage.getItem('langage') || 'fr'; // Valeur par défaut 'fr'
    this._translator.getTranslation(this.currentLangage);
    console.log(this.currentLangage);
    this._translator.translator.subscribe((response) => {
      this.currentLangage = response;
      this.updateLangage();
    });
  }

  updateLangage() {
    console.log(this.currentLangage);
  }
}
