import { TestBed } from '@angular/core/testing'
import { within } from '@testing-library/angular'
import { ThemeService } from './theme.service'

describe('ThemeService', () => {
  let service: ThemeService

  beforeEach(() => {
    const link = document.createElement('link')

    link.id = 'app-theme'
    link.href = 'light-theme.css'
    link.setAttribute('data-testid', 'app-theme')
    document.head.appendChild(link)
    TestBed.configureTestingModule({ providers: [ThemeService] })
    service = TestBed.inject(ThemeService)
  })

  afterEach(() => {
    within(document.head).getByTestId('app-theme').remove()
  })

  it('should initialize the app with light theme', () => {
    expect(service.theme()).toBe('light')
    expect(within(document.head).getByTestId('app-theme')).toHaveProperty(
      'href',
      'http://localhost/light-theme.css'
    )
  })

  it('should switch between themes', () => {
    const link = within(document.head).getByTestId('app-theme')

    service.toggleTheme()

    expect(service.theme()).toBe('dark')
    expect(link).toHaveProperty('href', 'http://localhost/dark-theme.css')

    service.toggleTheme()

    expect(service.theme()).toBe('light')
    expect(link).toHaveProperty('href', 'http://localhost/light-theme.css')
  })
})
