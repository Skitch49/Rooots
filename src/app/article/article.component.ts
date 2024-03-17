import { Component, HostListener, OnInit } from '@angular/core';
import { ApiRoootsService } from '../services/api-rooots.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articleId: string = '';
  article: any;
  isMobile: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiRoootsService
  ) {}

  ngOnInit(): void {
    this.detectScreenSize();

    this.route.paramMap.subscribe((params) => {
      this.articleId = params.get('actu')!;
      this.loadArticle();
    });
  }

  loadArticle() {
    this.apiService.getArticleById(this.articleId).subscribe(
      (data) => (this.article = data),
      (error) => console.error(error)
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.isMobile = window.innerWidth < 751;
  }
}
