import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-article',
  templateUrl: './rt-article.component.html',
  styleUrls: ['./rt-article.component.scss']
})
export class RtArticleComponent {
@Input() description: string = 'Explorez les principes fondamentaux de la RSE, son impact sur les entreprises et la société...';
@Input() titre: string = 'RSE : Tout ce qu’il faut savoir'; 
@Input() img: string = '../../assets/images/img_illustration_actu.webp'; 
@Input() date: string = '8 juin 2023'; 
}
