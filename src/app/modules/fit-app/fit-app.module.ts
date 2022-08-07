import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitAppRoutingModule } from '@fit-app/fit-app-routing.module';
import { FitAppComponent } from '@fit-app/components/fit-app/fit-app.component';

@NgModule({
  declarations: [FitAppComponent],
  imports: [CommonModule, FitAppRoutingModule],
})
export class FitAppModule {}
