import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PATH_ROUT } from '../../index.constants';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isOpen = false;
  PATH = PATH_ROUT;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
