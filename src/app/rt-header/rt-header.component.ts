import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { Observable } from 'rxjs';
import { HeaderCategories } from '../interfaces/header-categories.interface';
import { Router } from '@angular/router';
import { ApiRoootsService } from '../services/api-rooots.service';

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
      this.iconCatalogue = 'border_all';
      this.burgerMenuIcon = 'menu';
      this.subMenuVisible = false;
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

  constructor(public _translator: TranslateService, private router: Router, private _http: ApiRoootsService) {
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

  ngOnInit(): void {
    this._http.getAllUser().subscribe((resp)=>{      
    })
  }

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
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Fibre de ricin',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Jute',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.webp',
            },
          ],
        },
        {
          name: 'Matières synthétiques',
          materials: [
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.webp',
            },
          ],
        },
        {
          name: 'Matières recyclées',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.webp',
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
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Fibre de ricin',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Jute',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Kapok',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Laine',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Lin',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Liège',
              img: '../../assets/images/img_example_tissus.webp',
            },
          ],
        },
        {
          name: 'Essuie tout',
          materials: [
            {
              name: 'Bloom Foam ©',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Caoutchouc',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Chanvre',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Coton bio',
              img: '../../assets/images/img_example_tissus.webp',
            },
            {
              name: 'Cuir tanné végétal',
              img: '../../assets/images/img_example_tissus.webp',
            },
          ],
        },
      ],
    },
  ];

  public leave(link:string):void {
    this.subMenuVisible = false;
    this.iconCatalogue = 'border_all';
    this.burgerMenuIcon = 'menu';
    this.router.navigate([link])
  }
}
