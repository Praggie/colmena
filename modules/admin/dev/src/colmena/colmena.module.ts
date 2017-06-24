import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DevRoutingModule } from './colmena-routing.module'

import { ColmenaService } from './colmena.service'

import { DashboardComponent } from './components/dashboard.component'
import { DataComponent } from './components/data.component'
import { DetailComponent} from './components/detail.component'
import { IndexComponent } from './components/index.component'
import { ModulesComponent } from './components/modules.component'
import { ModulesModelsComponent } from './components/modules-models.component'
import { ModulesSampleDataComponent } from './components/modules-sample-data.component'

@NgModule({
  imports: [
    ColmenaUiModule,
    DevRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    DataComponent,
    DetailComponent,
    IndexComponent,
    ModulesComponent,
    ModulesModelsComponent,
    ModulesSampleDataComponent,
  ],
  providers: [
    ColmenaService,
  ]
})
export class ColmenaModule {}
