import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-input-text',
  templateUrl: './rt-input-text.component.html',
  styleUrls: ['./rt-input-text.component.scss']
})
export class RtInputTextComponent {
@Input() type: string = "text";
@Input() placeholder: string = "Entrez votre adresse mail";
@Input() formControlName: string = "nom";
}
