import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from '@fit-app/auth/auth-routing.module';
import { LoginComponent } from '@fit-app/auth/login/login.component';
import { SignupComponent } from '@fit-app/auth/signup/signup.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
  ],
})
export class AuthModule {}
