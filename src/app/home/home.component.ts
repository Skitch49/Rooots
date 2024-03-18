import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element';
import { TranslateService } from '../services/translate.service';
import { SwiperOptions } from 'swiper/types';
import { ApiRoootsService } from '../services/api-rooots.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('swiperPosition') swiperPosition!: ElementRef<SwiperContainer>;
  @ViewChild('swiperCommu') swiperCommu!: ElementRef<SwiperContainer>;
  @ViewChild('swiperHightlight') swiperHightlight: ElementRef | undefined;
  public isMobile: boolean = false;
  articleList: any = [];

  // Swiper
  swiperConfig: SwiperOptions = {
    slidesPerView: 3,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    loop: true,

    slidesPerGroup: 3,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1350: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  };

  swiperConfigHightlight: SwiperOptions = {
    slidesPerView: 3,

    loop: true,

    slidesPerGroup: 3,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  };
  // mobile version
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }

  titleHome = '';
  endTitleHome = '';
  paraHome = '';
  buy = '';
  hightlightCard1 = '';
  hightlightCard2 = '';
  hightlightCard3 = '';
  hightlightCard4 = '';
  titleProximity = '';
  descProximity = '';
  btnAllMaterials = '';
  textCardProximity = '';
  whyRooots = '';
  titleResponse1 = '';
  descResponse1 = '';
  titleResponse2 = '';
  descResponse2 = '';
  titleResponse3 = '';
  descResponse3 = '';
  titleResponse4 = '';
  descResponse4 = '';
  titleLastActu = '';
  allActu = '';
  titleHowWorkIt = '';
  descHowWorkIt1 = '';
  descHowWorkIt2 = '';
  descHowWorkIt3 = '';
  descHowWorkIt4 = '';
  titleCommu = '';
  paraCommu = '';
  btnJoinCommu = '';
  descAvis1 = '';
  situationAvis1 = '';
  nomAvis1 = '';
  descAvis2 = '';
  situationAvis2 = '';
  nomAvis2 = '';
  descAvis3 = '';
  situationAvis3 = '';
  nomAvis3 = '';
  currentLangage: any = '';
  constructor(public _translator: TranslateService, private apiRooots:ApiRoootsService) {
    register();
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
    this.apiRooots.getAllArticles().subscribe((resp) => {
      this.articleList = resp      
    }, (err) => {
      console.warn("could not retrieve articles")
    })
  }

  get lastFourArticles() {
    // Filtre les articles où le titre n'est pas nul
    const filteredArticles = this.articleList.filter((article: { titre: string; }) => article.titre != null);

    // Retourne les 4 derniers articles de la liste filtrée
    return filteredArticles.slice(-4);
  }
  get lastArticle(){
    const filteredArticles = this.articleList.filter((article: { titre: string; }) => article.titre != null);

    // Retourne les 4 derniers articles de la liste filtrée
    return filteredArticles.slice(-1);
  }

  updateLangage() {
    if (this.currentLangage == 'fr') {
      this.titleHome = 'Trouvez les matériaux de votre succès';
      this.endTitleHome = 'responsable';
      this.paraHome = `Trouvez des matières premières et produits intermédiaires éco
      responsables provenant de fournisseurs européens, et contribuez à créer
      un avenir durable pour votre entreprise et notre planète.`;
      this.buy = `Acheter maintenant`;
      this.hightlightCard1 = `Matériaux pour casquettes éco-responsables`;
      this.hightlightCard2 = `Les tissus naturels pour fabriquer des serviettes ou torchons`;
      this.hightlightCard3 = `Les matières pour des lacets écologiques et de bonne qualité`;
      this.hightlightCard4 = `Se sourcer pour réaliser ses propres chemises respectueuses`;
      this.titleProximity = `C'est proche de chez vous`;
      this.descProximity = ` Découvrez des produits éco-responsables locaux, sélectionnés avec soin
      auprès de fournisseurs proches de chez vous, pour une chaîne
      d'approvisionnement durable et à faible impact environnemental.`;
      this.btnAllMaterials = `Voir toutes les matières`;
      this.textCardProximity = `Bois FSC des Vosges`;
      this.whyRooots = `Pourquoi choisir Rooots ?`;
      this.titleResponse1 = `Large choix de matériaux éco-responsables`;
      this.descResponse1 = `Explorez des sources éco-responsables pour répondre à la demande des consommateurs éco-conscients.`;
      this.titleResponse2 = `Transparence et traçabilité des matériaux`;
      this.descResponse2 = `Bénéficiez d'une visibilité sur l'origine des matières ainsi que les pratiques durables de vos fournisseurs.`;
      this.titleResponse3 = `Processus de vente et d'achat simplifié`;
      this.descResponse3 = `Accédez à une plateforme conviviale qui facilite la recherche, la comparaison et l'achat des matières.`;
      this.titleResponse4 = `Renforcement de l'engagement responsable`;
      this.descResponse4 = `Renforcez votre image de marque grâce à l'utilisation de matières éco-responsables.`;
      this.titleLastActu = `Nos dernières actualités`;
      this.allActu = `Toutes nos actualités`;
      this.titleHowWorkIt = `Comment ça marche ?`;
      this.descHowWorkIt1 = `Découvrez une variété de matériaux éco-responsables soigneusement sélectionnés.`;
      this.descHowWorkIt2 = `Utilisez nos outils de filtrage pour trouver rapidement les produits adaptés à vos besoins.`;
      this.descHowWorkIt3 = `Ajoutez les produits à votre panier et finalisez votre commande en toute confiance.`;
      this.descHowWorkIt4 = `Restez informé(e) de l'avancement de votre commande jusqu'à la livraison à votre entreprise.`;
      this.titleCommu = `Rejoignez une communauté d’entreprises satisfaites`;
      this.paraCommu = `Les témoignages de nos clients témoignent de leur satisfaction et des avantages concrets qu'ils ont tirés de l'utilisation de notre plateforme. Rejoignez-les et découvrez comment notre marketplace peut vous aider à faire le bon choix pour votre entreprise éco-responsable.`;
      this.btnJoinCommu = `Rejoindre`;
      this.descAvis1 = `La plateforme nous a aidés à soutenir les fournisseurs locaux et à renforcer notre image de marque éco-responsable.`;
      this.situationAvis1 = `Gérant d'une PME de mobilier design`;
      this.nomAvis1 = `Thomas`;
      this.descAvis2 = `Grâce à cette plateforme, nous avons trouvé des matières premières éco-responsables de haute qualité, renforçant notre engagement envers la durabilité.`;
      this.situationAvis2 = `Fondateur d’une PME de mode éthique`;
      this.nomAvis2 = `Bastien`;
      this.descAvis3 = `La facilité d'utilisation et les outils de filtrage nous ont permis de trouver rapidement les produits adaptés à nos besoins.`;
      this.situationAvis3 = `Responsable des achats d'une PME alimentaire bio`;
      this.nomAvis3 = `Clara`;
    } else {
      this.titleHome = 'Find the materials you need in a way that is';
      this.endTitleHome = 'responsable';
      this.paraHome =
        'Find ecoresponsable materials you need from europeans suppliers, and contribute to the creation of a solid future for your company and your planet.';
      this.buy = 'Product list';
      this.hightlightCard1 = 'English please';
      this.hightlightCard2 = 'English please';
      this.hightlightCard3 = 'English please';
      this.hightlightCard4 = 'English please';
      this.titleProximity = 'English please';
      this.descProximity = 'English please';
      this.btnAllMaterials = `English please`;
      this.textCardProximity = `English please`;
      this.whyRooots = `English please`;
      this.titleResponse1 = `English please`;
      this.descResponse1 = `English please`;
      this.titleResponse2 = `English please`;
      this.descResponse2 = `English please`;
      this.titleResponse3 = `English please`;
      this.descResponse3 = `English please`;
      this.titleResponse4 = `English please`;
      this.descResponse4 = `English please`;
      this.titleLastActu = `English please`;
      this.allActu = `English please`;
      this.titleHowWorkIt = `English please`;
      this.descHowWorkIt1 = `English please`;
      this.descHowWorkIt2 = `English please`;
      this.descHowWorkIt3 = `English please`;
      this.descHowWorkIt4 = `English please`;
      this.titleCommu = `English please`;
      this.paraCommu = `English please`;
      this.btnJoinCommu = `English please`;
      this.descAvis1 = `English please`;
      this.situationAvis1 = `English please`;
      this.nomAvis1 = `English please`;
      this.descAvis2 = `English please`;
      this.situationAvis2 = `English please`;
      this.nomAvis2 = `English please`;
      this.descAvis3 = `English please`;
      this.situationAvis3 = `English please`;
      this.nomAvis3 = `English please`;
    }
  }

  onSlidePrev(): void {
    this.swiperPosition?.nativeElement.swiper.slidePrev(500);
  }
  onSlideNext(): void {
    this.swiperPosition?.nativeElement.swiper.slideNext(500);
  }

  onSlidePrevCommu(): void {
    this.swiperCommu?.nativeElement.swiper.slidePrev(500);
  }
  onSlideNextCommu(): void {
    this.swiperCommu?.nativeElement.swiper.slideNext(500);
  }
}
