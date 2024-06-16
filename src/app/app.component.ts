import { Component, inject } from '@angular/core'
import { ThemeService } from './services/theme/theme.service'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  themeService = inject(ThemeService)
}
