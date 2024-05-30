import { render, screen } from '@testing-library/angular'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(AppComponent)

    screen.getByText('App')
  })
})
