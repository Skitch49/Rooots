import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-nav-link',
  templateUrl: './rt-nav-link.component.html',
  styleUrls: ['./rt-nav-link.component.scss']
})
export class RtNavLinkComponent {
@Input() p : string = 'p-20'
@Input() text : string = 'Default';
@Input() link : string = '';
@Input() leftIcon?: string;
}
