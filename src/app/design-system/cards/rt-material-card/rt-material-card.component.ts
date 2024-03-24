import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-material-card',
  templateUrl: './rt-material-card.component.html',
  styleUrls: ['./rt-material-card.component.scss'],
})
export class RtMaterialCardComponent {
  @Input() titre: string = 'Lin vegan';
  @Input() img: string = './../../assets/images/img_example_tissus.webp';
  @Input() prix: string = '95.90';
  @Input() unite: string = 'kg';
  @Input() like: boolean = false;

  likeEvent(event: MouseEvent){
    event.stopPropagation(); // Empêche la propagation de l'événement

    this.like = !this.like;
  }
}

