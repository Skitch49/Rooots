import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-header-material',
  templateUrl: './rt-header-material.component.html',
  styleUrls: ['./rt-header-material.component.scss']
})
export class RtHeaderMaterialComponent {
  @Input() img : string = '../../assets/images/img_example_tissus.svg';
  @Input() name : string = 'Tissus tissés';
}
