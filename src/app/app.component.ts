import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
// Components
import { MainComponent } from './components/main/main.component'
import { AboutSectionComponent } from './features/about-section/about-section.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, AboutSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
