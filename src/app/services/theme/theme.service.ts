import { WritableSignal, signal } from '@angular/core'
import { createInjectable } from 'ngxtension/create-injectable'

export const ThemeService = createInjectable(() => {
  const theme: WritableSignal<'light' | 'dark'> = signal('light')

  const toggleTheme = (): void => {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement

    theme.set(theme() == 'light' ? 'dark' : 'light')
    themeLink.href = `${theme()}-theme.css`
  }

  return {
    theme,
    toggleTheme,
  }
})
