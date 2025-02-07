import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselCardComponent } from "../carousel-card/carousel-card.component";

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CommonModule, CarouselCardComponent],
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss',
})
export class CarouselSectionComponent {
  imageList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
