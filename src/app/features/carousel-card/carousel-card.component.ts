import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
})
export class CarouselCardComponent {}
