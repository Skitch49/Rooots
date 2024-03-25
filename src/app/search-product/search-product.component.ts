import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiRoootsService } from '../services/api-rooots.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent implements OnInit {
  public categorie?: string;
  public subcategorie?: string;
  products: any[] = [];
  private subscription: Subscription = new Subscription();
  minPrice: number = 0;
  maxPrice: number = 0;
  minDistance: number = 0;
  maxDistance: number = 0;
  minGrammage: number = 0;
  maxGrammage: number = 0;
  productOrigins: { [name: string]: number } = {};
  productLabels: { [name: string]: number } = {};
  ArrayColors: string[] = [];

  selectedProduct: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRooots: ApiRoootsService,
    private fb: FormBuilder
  ) {}

  selectProduct(product: any) {
    console.log('test product', product);
    this.selectedProduct = product;
  }
  
  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categorie = paramMap.get('categorie')!;
      this.subcategorie = paramMap.get('subcategorie')!;
    });

    // this.products = [
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 7,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Label AB',
    //       },
    //     ],
    //     color: 'Marron',
    //     grammage: 29,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 12,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Label AB',
    //       },
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Marron',
    //     grammage: 48,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 24,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Label AB',
    //       },
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 22,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 48,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 50,
    //     sample: true,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 78,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //       {
    //         name: 'Label PEFC',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 20,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 47,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //       {
    //         name: 'Label PEFC',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 12,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 17,
    //     origin: 'France',
    //     label: [
    //       {
    //         name: 'Label PEFC',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 25,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 54,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 30,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 67,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Label Oeko-Tex',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 35,
    //     sample: true,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 21,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Label Oeko-Tex',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 55,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 81,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Label Oeko-Tex',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 42,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 32,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Gris',
    //     grammage: 38,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 5,
    //     origin: 'Espagne',
    //     label: [
    //       {
    //         name: 'Label Oeko-Tex',
    //       },
    //     ],
    //     color: 'Gris',
    //     grammage: 8,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 121,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Label AB',
    //       },
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 17,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 87,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Label AB',
    //       },
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 26,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 47,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 60,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 77,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 54,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 25,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 34,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 9,
    //     origin: 'Allemagne',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 13,

    //     sample: true,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 43,
    //     origin: 'Portugal',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 35,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 14,
    //     origin: 'Portugal',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Blanc',
    //     grammage: 30,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 68,
    //     origin: 'Portugal',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 27,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 23,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 37,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 36,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 13,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 67,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Ecolabel',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 18,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Lin vegan',
    //     prix: 12,
    //     distance: 87,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Beige',
    //     grammage: 19,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Laine',
    //     prix: 15,
    //     distance: 98,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Gris',
    //     grammage: 20,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Liège',
    //     prix: 99,
    //     distance: 23,
    //     origin: 'Italie',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Gris',
    //     grammage: 26,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Caoutchouc',
    //     prix: 84.05,
    //     distance: 23,
    //     origin: 'Suisse',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Gris',
    //     grammage: 46,

    //     sample: false,
    //   },
    //   {
    //     titre: 'Chanvre',
    //     prix: 40.1,
    //     distance: 29,
    //     origin: 'Suisse',
    //     label: [
    //       {
    //         name: 'Label NF',
    //       },
    //     ],
    //     color: 'Noir',
    //     grammage: 40,

    //     sample: false,
    //   },
    // ];
    this.getAllProducts();
    this.calculatePricesAndDistances();
    this.groupProductsByOrigin();
    this.calculateLabelCounts();
    this.getAllColors();
    this.form.patchValue({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      maxDistance: this.maxDistance,
      maxGrammage: this.maxGrammage,
    });
  }

  getAllColors() {
    const allColors = this.products.map((product) => product.color);
    this.ArrayColors = Array.from(new Set(allColors));
  }
  public form: FormGroup = this.fb.group({
    minPrice: '',
    maxPrice: '',
    maxDistance: '',
    origin: '',
    labels: '',
    withSample: '',
    withoutSample: '',
    color: '',
    maxGrammage: '',
  });

  submit() {
    if (this.form.valid) {
      this.form.reset();
    } else {
      console.error('Le formulaire ne fonctionne pas');
    }
  }
  getAllProducts() {
    this.subscription = this.apiRooots.getAllProducts().subscribe(
      data => {
        this.products = data as Object[];
      },
      error => {
        console.error('Erreur lors de la récupération des produits ',error)
      }
    );
  }
  private calculatePricesAndDistances() {
    const prices = this.products.map((p) => p.prix);
    const distances = this.products.map((p) => p.distance);
    const grammages = this.products.map((p) => p.grammage);
    this.minPrice = Math.min(...prices);
    this.minDistance = Math.min(...distances);
    this.minGrammage = Math.min(...grammages);
    this.maxDistance = Math.max(...distances);
    this.maxPrice = Math.max(...prices);
    this.maxGrammage = Math.max(...grammages);
    console.log('grammages ' + grammages);
    console.log('maxGrammgages ' + this.maxGrammage);
  }

  private groupProductsByOrigin() {
    this.products.forEach((product) => {
      if (this.productOrigins[product.origin]) {
        this.productOrigins[product.origin]++;
      } else {
        this.productOrigins[product.origin] = 1;
      }
    });
  }

  private calculateLabelCounts() {
    this.products.forEach((product) => {
      product.label.forEach((labelObj: { name: any }) => {
        const label = labelObj.name;
        if (this.productLabels[label]) {
          this.productLabels[label]++;
        } else {
          this.productLabels[label] = 1;
        }
      });
    });
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      maxDistance: this.maxDistance,
      maxGrammage: this.maxGrammage,
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
