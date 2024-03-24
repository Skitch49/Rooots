import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public categorie?: string;
  public subcategorie?: string;
  // public product?: string;
  public quantity?: number = 1;
  @Input() product: any;

  public mainImage: string = './../../assets/images/img_product.webp';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('product :'+this.product); // Utilisez l'objet product comme nécessaire
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categorie = paramMap.get('categorie')!;
      this.subcategorie = paramMap.get('subcategorie')!;
       this.product = paramMap.get('product')!;
    });

  }

  changeMainImage(newImage: string) {
    this.mainImage = newImage;
  }

  increment() {
    this.changeValue(1);
  }

  decrement() {
    this.changeValue(-1);
  }
  private changeValue(delta:number) {
    this.quantity = Math.max(1, this.quantity! + delta);
  }
}
