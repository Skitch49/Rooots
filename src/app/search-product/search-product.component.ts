import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiRoootsService } from '../services/api-rooots.service';
import { Subscription, switchMap } from 'rxjs';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRooots: ApiRoootsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((paramMap: ParamMap) => {
        this.categorie = paramMap.get('categorie')!;
        this.subcategorie = paramMap.get('subcategorie')!;
        return this.apiRooots.getAllProducts(); // Récupérer les produits et les renvoyer
      })
    ).subscribe(
      (data) => {
        this.products = data as Object[];
        this.calculatePricesAndDistances();
        this.groupProductsByOrigin();
        // this.calculateLabelCounts();
        this.getAllColors();
        this.form.patchValue({
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          maxDistance: this.maxDistance,
          maxGrammage: this.maxGrammage,
        });

      },
      (error) => {
        console.error('Erreur lors de la récupération des produits ', error);
      }
    );
  }

  getAllColors() {
    const allColors = this.products.map((product) => product.couleur);
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
      (data) => {
        this.products = data as Object[];
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits ', error);
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

  sortProductsByPriceDescending() {
    this.products.sort((a, b) => b.prix - a.prix);
  }
  sortProductsByPriceAcending() {
    this.products.sort((a, b) => a.prix - b.prix);
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

  onSortChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === '+') {
      this.sortProductsByPriceDescending();
    }
    if(selectedValue === '-'){
      this.sortProductsByPriceAcending();

    }
    else {
      // Autres options de tri
    }
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
