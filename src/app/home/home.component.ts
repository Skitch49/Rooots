import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { register } from 'swiper/element';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('swiperPosition') swiperPosition: ElementRef | undefined;
  @ViewChild('swiperCommu') swiperCommu: ElementRef | undefined;

  
  constructor() {
    register();
  }
  
  onSlidePrev(): void {
    this.swiperPosition?.nativeElement.swiper.slidePrev(500);
  }
  onSlideNext(): void {
    this.swiperPosition?.nativeElement.swiper.slideNext(500);
  }

  onSlidePrevCommu(): void {
    this.swiperCommu?.nativeElement.swiper.slidePrev(500);
  }
  onSlideNextCommu(): void {
    this.swiperCommu?.nativeElement.swiper.slideNext(500);
  }

}
