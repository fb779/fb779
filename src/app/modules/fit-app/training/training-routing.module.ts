import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperTrainingComponent } from '@fit-app/training/wrapper-training/wrapper-training.component';
import { WelcomeTrainingComponent } from '@fit-app/training/welcome-training/welcome-training.component';
import { NewTrainingsComponent } from '@fit-app/training/new-trainings/new-trainings.component';
import { CurrentTrainingComponent } from '@fit-app/training/current-training/current-training.component';
import { PastTrainingsComponent } from '@fit-app/training/past-trainings/past-trainings.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperTrainingComponent,
    children: [
      { path: '', component: WelcomeTrainingComponent },
      { path: 'new', component: NewTrainingsComponent },
      { path: 'trainings', component: PastTrainingsComponent },
      { path: 'current', component: CurrentTrainingComponent },
      // { path: '**', redirectTo: '', pathMatch: 'Full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'Full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
