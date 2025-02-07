import { Component } from '@angular/core';
// Components
import { headerDetailsComponent } from '../header-details/header-details.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [headerDetailsComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
})
export class HeaderSectionComponent {}
