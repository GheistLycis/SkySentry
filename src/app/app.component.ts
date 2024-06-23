import { CommonModule } from '@angular/common'
import { Component, OnInit, inject, signal } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api'
import { CardModule } from 'primeng/card'
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon'
import { InputSwitchModule } from 'primeng/inputswitch'
import { InputTextModule } from 'primeng/inputtext'
import { SidebarModule } from 'primeng/sidebar'
import { ThemeService } from './services/theme/theme.service'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    SidebarModule,
    InputSwitchModule,
    CardModule,
    CommonModule,
    InputGroupModule,
    InputTextModule,
    InputGroupAddonModule,
  ],
})
export class AppComponent implements OnInit {
  themeService = inject(ThemeService)
  primeConfig = inject(PrimeNGConfig)

  sidebarIsOpen = signal(false)

  ngOnInit(): void {
    this.primeConfig.ripple = true
  }
}
