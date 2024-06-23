import { Injectable, effect, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>('light')

  constructor() {
    effect(() => {
      const themeLink = document.getElementById('app-theme') as HTMLLinkElement

      themeLink.href = `${this.theme()}-theme.css`
    })
  }

  toggleTheme(): void {
    this.theme.set(this.theme() == 'light' ? 'dark' : 'light')
  }
}
