import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuList } from '../../services/header.service';
import { menuList } from './header-details.constants';

@Component({
  selector: 'app-header-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-details.component.html',
  styleUrl: './header-details.component.scss',
})
export class headerDetailsComponent {
  menuList: MenuList[] = menuList;
}
