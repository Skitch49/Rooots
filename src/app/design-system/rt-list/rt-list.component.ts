import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-list',
  templateUrl: './rt-list.component.html',
  styleUrls: ['./rt-list.component.scss']
})
export class RtListComponent {
  @Input() text: string = 'list';
  @Input() leftIcon: boolean = false;
}
