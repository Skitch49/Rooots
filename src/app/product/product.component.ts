import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiRoootsService } from '../services/api-rooots.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public categorie?: string;
  public subcategorie?: string;
  public product: any;
  public productId!: any;
  public quantity?: number = 1;

  public mainImage: string = './../../assets/images/img_product.webp';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRooots: ApiRoootsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categorie = paramMap.get('categorie')!;
      this.subcategorie = paramMap.get('subcategorie')!;
      this.productId = paramMap.get('product')!;
    });
    this.getProduct();
  }

  getProduct() {
    this.apiRooots.getProductId(this.productId).subscribe(
      (data)=> {
        this.product = data;
      },
      (error) => console.error(error)
    );
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
  private changeValue(delta: number) {
    this.quantity = Math.max(1, this.quantity! + delta);
  }
}
