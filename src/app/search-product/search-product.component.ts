import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent implements OnInit {
  public categorie?: string;
  public subcategorie?: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.categorie = paramMap.get('categorie')!;
      this.subcategorie = paramMap.get('subcategorie')!;
    });
  }
}
