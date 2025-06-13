import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerDetailsComponent } from "../../features/header-details/header-details.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterOutlet, headerDetailsComponent, FooterComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {}
