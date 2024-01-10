import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translatorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('fr');

  translator: Observable<string> = this.translatorSubject.asObservable();

  constructor() {}


  getTranslation(lang: string) {
    console.log(lang);
    localStorage.setItem('langage', lang);
    this.translatorSubject.next(lang);
  }
}
