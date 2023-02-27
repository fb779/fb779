import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PipesModule } from '@app/pipes/pipes.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    HeaderComponent,
    HeroCardComponent,
    HeroListComponent,
  ],
  imports: [CommonModule, MaterialModule, HeroesRoutingModule, PipesModule],
})
export class HeroesModule {}
