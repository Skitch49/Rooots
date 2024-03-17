import { Component, HostListener, OnInit } from '@angular/core';
import { ApiRoootsService } from '../services/api-rooots.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articleList: any = [];
  isMobile: boolean = false;
  constructor(private _http: ApiRoootsService) {}

  ngOnInit(): void {
    this.detectScreenSize();
    this.scrollToTop();

    this._http.getAllArticles().subscribe(
      (resp) => {
        this.articleList = resp;
      },
      (err) => {
        console.warn('could not retrieve articles');
      }
    );
  }

  // mobile version
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }

  private scrollToTop() {
    window.scrollTo(0, 0);
  }

}
