import { Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>('light')

  constructor() {}

  toggleTheme(): void {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement

    this.theme.set(this.theme() == 'light' ? 'dark' : 'light')
    themeLink.href = `${this.theme()}-theme.css`
  }
}
