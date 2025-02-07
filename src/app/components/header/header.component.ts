import { Component } from '@angular/core';
// Components
import { HeaderSectionComponent } from '../../features/header-section/header-section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  header = 'Header';
}
