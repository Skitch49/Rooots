import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-input-text',
  templateUrl: './rt-input-text.component.html',
  styleUrls: ['./rt-input-text.component.scss']
})
export class RtInputTextComponent {
@Input() type: string = "text";
@Input () valueInput: string = "";
@Input () name: string = "default";
@Input() placeholder: string = "Entrez votre adresse mail";
}
