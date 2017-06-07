import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WhoComponent } from './who.component';

@NgModule({
  declarations: [
    WhoComponent
  ],
  imports: [
    CovalentCoreModule,
    TranslateModule,
    NgxChartsModule,
    SharedModule
  ]
})
export class WhoModule {
}
