import { Component } from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {ButtonComponent} from "../../shared/button/button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    UpperCasePipe,
    ButtonComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
