import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from '@fit-app/training/training-routing.module';
import { CurrentTrainingComponent } from '@fit-app/training/current-training/current-training.component';
import { NewTrainingsComponent } from '@fit-app/training/new-trainings/new-trainings.component';
import { PastTrainingsComponent } from '@fit-app/training/past-trainings/past-trainings.component';
import { WelcomeTrainingComponent } from './welcome-training/welcome-training.component';
import { WrapperTrainingComponent } from './wrapper-training/wrapper-training.component';
import { NavbarTrainingComponent } from './navbar-training/navbar-training.component';

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    NewTrainingsComponent,
    PastTrainingsComponent,
    WelcomeTrainingComponent,
    WrapperTrainingComponent,
    NavbarTrainingComponent,
  ],
  imports: [CommonModule, TrainingRoutingModule],
})
export class TrainingModule {}
