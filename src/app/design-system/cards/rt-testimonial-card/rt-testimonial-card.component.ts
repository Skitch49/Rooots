import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rt-testimonial-card',
  templateUrl: './rt-testimonial-card.component.html',
  styleUrls: ['./rt-testimonial-card.component.scss'],
})
export class RtTestimonialCardComponent {
  @Input() desc: string =
    'Nec minus feminae quoque calamitatum participes flagitiis obnoxiae vel stuprorum. Inter quas notiores fuere Claritas et Flaviana. Nec minus feminae quoque calamitatum participes';
  @Input() img: string = './../../assets/images/avis_example_1.svg';
  @Input() nom: string = 'Thomas';
  @Input() situation: string = "Gérant d'une PME de mobilier design";
}
