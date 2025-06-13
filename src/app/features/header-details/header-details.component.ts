import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuList } from '../../services/header.service';
import { menuList } from './header-details.constants';
import { MenuComponent } from "../menu/menu.component";

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
