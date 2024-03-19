import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-proximity-card',
  templateUrl: './rt-proximity-card.component.html',
  styleUrls: ['./rt-proximity-card.component.scss']
})
export class RtProximityCardComponent {
  @Input() text: string = 'Bois FSC des Vosges';
  @Input() img: string = './../../assets/images/img_example_3.webp';
  @Input() localisation: string = '60';
}
