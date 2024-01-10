import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Observable } from 'rxjs';
import { HeaderCategories } from '../interfaces/header-categories.interface';

@Component({
  selector: 'app-rt-header',
  templateUrl: './rt-header.component.html',
  styleUrls: ['./rt-header.component.scss'],
})
export class RtHeaderComponent implements OnInit {

  public subMenuVisible: boolean = false;

  public connexion: boolean = false;
  navbarDisplay: boolean = true;
  private prevScrollPos: number = 0;

  @HostListener('window:scroll', ['$event']) onscroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > this.prevScrollPos && window.scrollY > 100) {
      // L'utilisateur fait défiler vers le bas
      this.navbarDisplay = false;
    } else {
      // L'utilisateur fait défiler vers le haut
      this.navbarDisplay = true;
    }
    this.prevScrollPos = currentScrollPos;
  }

  Username = 'Alexis';
  connexionBtn = '';
  whoAreYou = '';
  catalogue = '';
  actu = '';
  becomeSheller = '';
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

  updateLangage() {
    console.log(this.currentLangage);
    if (this.currentLangage == 'fr') {
      this.connexionBtn = "Se connecter / S'inscrire";
      this.catalogue = 'Catalogue';
      this.whoAreYou = 'Qui sommes-nous ?';
      this.actu = 'Actualités';
      this.becomeSheller = 'Devenir vendeur';
    } else {
      this.connexionBtn = 'Login / inscription';
      this.catalogue = 'English please';
      this.whoAreYou = 'English please';
      this.actu = 'English please';
      this.connexionBtn = 'English please';
      this.becomeSheller = 'English please';
    }
  }

  ngOnInit(): void {}

  public showSubMenu() {
    this.subMenuVisible = !this.subMenuVisible;
  }

  public categories: HeaderCategories[] = [
    {
      name: 'Textile',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Cuir',
      subcategories: [
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'deux tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Habillement',
      subcategories: [
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'trois tissus',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'su su',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Suspendu',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'du du',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Durable',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
    {
      name: 'Nom de la catégorie',
      subcategories: [
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
        {
          name: 'Tissus tissés',
          img: '../../assets/images/img_example_tissus.svg',
        },
      ],
    },
  ];
}
