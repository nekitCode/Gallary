import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../features/about-section/about-section.component';
import { CarouselSectionComponent } from '../../features/carousel-section/carousel-section.component';
import { MainSectionComponent } from '../../features/main-section/main-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MainSectionComponent,
    AboutSectionComponent,
    HeaderComponent,
    CarouselSectionComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
