import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerDetailsComponent } from '../../features/header-details/header-details.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-gallery',
  imports: [headerDetailsComponent, RouterOutlet, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {}
