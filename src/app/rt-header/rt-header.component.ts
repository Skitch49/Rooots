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
  public isMobile: boolean = false;
  public subMenuVisible: boolean = false;

  public currentStep: number = 1;
  public selectedCategory: any;
  public selectedSubcategory: any;

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }

  Username = 'Alexis';
  connexionBtn = '';
  whoAreYou = '';
  catalogue = '';
  iconCatalogue = 'border_all';
  burgerMenuIcon = 'menu';
  actu = '';
  becomeSheller = '';
  currentLangage: any = '';
  constructor(public _translator: TranslateService) {
    this.detectScreenSize();
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
      this.catalogue = 'Product list';
      this.whoAreYou = 'Who are we ?';
      this.actu = 'News';
      this.becomeSheller = 'Want to sell ?';
    }
  }

  ngOnInit(): void {}

  public showSubMenu() {
    this.subMenuVisible = !this.subMenuVisible;
    if (this.subMenuVisible) {
      this.iconCatalogue = 'close';
      this.burgerMenuIcon = 'close';
    } else {
      this.iconCatalogue = 'border_all';
      this.burgerMenuIcon = 'menu';
      // Réinitialisez l'étape lorsque le menu est fermé
    this.currentStep = 1;
    }
  }

  public nextStep(category: any) {
    // Gérez le passage à l'étape suivante ici
    if (this.currentStep === 1) {
      this.selectedCategory = category;
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      this.selectedSubcategory = category;
      this.currentStep = 3;
    }
  }




  public categories: HeaderCategories[] = [
    {
      name: 'Les types de matières',
      subcategories: [
        {
          name: 'Matières naturelles',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Fibre de ricin',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Jute',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.svg',
            },
          ],
        },
        {
          name: 'Matières synthétiques',
          materials: [
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.svg',
            },
          ],
        },
        {
          name: 'Matières recyclées',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.svg',
            },
          ],
        },
      ],
    },
    {
      name: `Les types d'utilisation`,
      subcategories: [
        {
          name: 'Vetements',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Fibre de ricin',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Jute',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.svg',
            },
          ],
        },
        {
          name: 'Essuie tout',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.svg',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.svg',
            },
          ],
        },
      ],
    },
  ];
}
