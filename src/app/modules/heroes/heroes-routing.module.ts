import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '@heroes/heroes.component';
import { HomeComponent } from '@heroes/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class HeroesRoutingModule {}
