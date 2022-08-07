import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitAppComponent } from '@fit-app/components/fit-app/fit-app.component';

const routes: Routes = [{ path: '', component: FitAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitAppRoutingModule {}
