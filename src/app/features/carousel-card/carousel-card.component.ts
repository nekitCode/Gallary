import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import {ICarousel} from "../../models/carousel";

@Component({
  selector: ' app-carousel-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
})
export class CarouselCardComponent {
  @Input() carouselProperty!: ICarousel;
}
