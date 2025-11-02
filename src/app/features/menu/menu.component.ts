import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PATH_ROUT } from '../../index.constants';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isOpen = false;
  PATH_LIST = [
    {name: 'Главная', path: PATH_ROUT.ROOT},
    {name: 'Галерия', path: PATH_ROUT.GALLERY},
    {name: 'Контакты', path: PATH_ROUT.CONTACT}
  ];


  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
