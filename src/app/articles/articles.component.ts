import { Component, OnInit } from '@angular/core';
import { ApiRoootsService } from '../services/api-rooots.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  
  articleList: any = []
  
  constructor(private _http: ApiRoootsService){}
  
  ngOnInit(): void {
        this._http.getAllArticles().subscribe((resp) => {
          this.articleList = resp          
        }, (err) => {
          console.warn("could not retrieve articles")
        })
    }
}
