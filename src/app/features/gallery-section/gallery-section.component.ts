import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  imports: [CommonModule],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
  @Input() images: string[] = [
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
  ];
  // @Input() visibleSlides = 3; // Количество видимых слайдов
  // @Input() autoPlay = true; // Автоматическое перелистывание
  // @Input() interval = 3500; // Интервал в миллисекундах
  // @Input() transitionDuration = 1000; // Длительность анимации в ms

  // currentIndex = 0;
  // private timer: any;
  // slides: any[] = [];

  // ngOnInit() {
  //   this.prepareSlides();
  //   if (this.autoPlay) {
  //     this.startTimer();
  //   }
  // }

  // ngOnDestroy() {
  //   this.clearTimer();
  // }

  // prepareSlides() {
  //   // Создаем массив слайдов с учетом видимого количества
  //   this.slides = this.images.map((img, index) => ({
  //     image: img,
  //     index: index,
  //   }));
  // }

  // get transformValue() {
  //   // Смещение для анимации
  //   return `translateX(-${this.currentIndex * (100 / this.visibleSlides)}%)`;
  // }

  // get trackWidth() {
  //   // Ширина трека для правильного позиционирования
  //   return `${(this.images.length / this.visibleSlides) * 100}%`;
  // }

  // startTimer() {
  //   this.timer = setInterval(() => {
  //     this.next();
  //   }, this.interval);
  // }

  // clearTimer() {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //   }
  // }

  // next() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //   // this.restartTimer();
  // }

  // prev() {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.images.length) % this.images.length;
  //   // this.restartTimer();
  // }

  // goTo(index: number) {
  //   this.currentIndex = index;
  //   // this.restartTimer();
  // }

  // private restartTimer() {
  //   if (this.autoPlay) {
  //     this.clearTimer();
  //     this.startTimer();
  //   }
  // }
}
