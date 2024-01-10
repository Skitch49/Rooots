import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-button',
  templateUrl: './rt-button.component.html',
  styleUrls: ['./rt-button.component.scss'],
})
export class RtButtonComponent {
  @Input() size: string = 'medium';
  @Input() type: string = 'primary';
  @Input() text: string = 'button';
  @Input() rightIcon?: string;
  @Input() leftIcon?: string;
}
