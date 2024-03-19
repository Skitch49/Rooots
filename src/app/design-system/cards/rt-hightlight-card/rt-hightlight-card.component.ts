import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-hightlight-card',
  templateUrl: './rt-hightlight-card.component.html',
  styleUrls: ['./rt-hightlight-card.component.scss'],
})
export class RtHightlightCardComponent {
  @Input() text: string = 'Tissus durables pour vêtements éco-responsables';
  @Input() img: string = './../../assets/images/img_example_1.webp';
}
