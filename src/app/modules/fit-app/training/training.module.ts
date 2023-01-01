import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/modules/material/material.module';
import { TrainingRoutingModule } from '@fit-app/training/training-routing.module';

import { WrapperTrainingComponent } from '@fit-app/training/wrapper-training/wrapper-training.component';
import { NavbarTrainingComponent } from '@fit-app/training/navbar-training/navbar-training.component';
import { MenuTrainingComponent } from '@fit-app/training/menu-training/menu-training.component';
import { WelcomeTrainingComponent } from '@fit-app/training/welcome-training/welcome-training.component';
import { CurrentTrainingComponent } from '@fit-app/training/current-training/current-training.component';
import { NewTrainingsComponent } from '@fit-app/training/new-trainings/new-trainings.component';
import { PastTrainingsComponent } from '@fit-app/training/past-trainings/past-trainings.component';

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    NewTrainingsComponent,
    PastTrainingsComponent,
    WelcomeTrainingComponent,
    WrapperTrainingComponent,
    NavbarTrainingComponent,
    MenuTrainingComponent,
  ],
  imports: [CommonModule, TrainingRoutingModule, MaterialModule],
})
export class TrainingModule {}
