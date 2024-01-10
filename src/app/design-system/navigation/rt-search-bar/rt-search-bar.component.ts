import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-rt-search-bar',
  templateUrl: './rt-search-bar.component.html',
  styleUrls: ['./rt-search-bar.component.scss'],
})
export class RtSearchBarComponent {
  public search: string = '';
  currentLangage: any = '';
  placeholder = '';

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
      this.placeholder = 'Recherche';
    } else {
      this.placeholder = 'Search';
    }
  }
}
