import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-checkbox',
  templateUrl: './rt-checkbox.component.html',
  styleUrls: ['./rt-checkbox.component.scss'],
})
export class RtCheckboxComponent {
  @Input() formControlName: string = 'name';
}
