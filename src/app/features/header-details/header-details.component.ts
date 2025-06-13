import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuList } from '../../services/header.service';
import { MenuComponent } from '../menu/menu.component';
import { menuList } from './header-details.constants';

@Component({
  selector: 'app-header-details',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header-details.component.html',
  styleUrl: './header-details.component.scss',
})
export class headerDetailsComponent {
  menuList: MenuList[] = menuList;
}
