import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DevRoutingModule } from './dev-routing.module'

import { HasDevAccess } from './dev.guards'

import { AlertComponent } from './components/alert.component'
import { DashboardComponent } from './components/dashboard.component'
import { FormsComponent } from './components/forms.component'
import { IndexComponent } from './containers/index.component'
import { ToastComponent } from './components/toast.component'

@NgModule({
  imports: [
    FormsModule,
    ColmenaUiModule,
    DevRoutingModule,
  ],
  declarations: [
    AlertComponent,
    DashboardComponent,
    FormsComponent,
    IndexComponent,
    ToastComponent,
  ],
  providers: [
    HasDevAccess,
  ]
})
export class DevModule {

  public static navLinks = [
    { icon: 'icon-note', title: 'Forms', link: 'forms', type: 'warning' },
    { icon: 'icon-info', title: 'Alerts', link: 'alerts', type: 'danger' },
    { icon: 'icon-bubble', title: 'Toasts', link: 'toasts', type: 'success' },
    { icon: 'fa fa-cube', title: 'Colmena', link: 'colmena', type: 'primary' },
  ]
}
