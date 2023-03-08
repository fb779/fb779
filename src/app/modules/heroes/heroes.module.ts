import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PipesModule } from '@app/pipes/pipes.module';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { SecHeroIdentityComponent } from './components/sec-hero-identity/sec-hero-identity.component';
import { SecHeroPowerstatsComponent } from './components/sec-hero-powerstats/sec-hero-powerstats.component';
import { SecHeroAppearanceComponent } from './components/sec-hero-appearance/sec-hero-appearance.component';
import { SecHeroBiographyComponent } from './components/sec-hero-biography/sec-hero-biography.component';
import { SecHeroConnectionsComponent } from './components/sec-hero-connections/sec-hero-connections.component';
import { SecHeroImagesComponent } from './components/sec-hero-images/sec-hero-images.component';
import { SecHeroWorkComponent } from './components/sec-hero-work/sec-hero-work.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    HeaderComponent,
    HeroCardComponent,
    HeroListComponent,
    HeroFormComponent,
    SecHeroIdentityComponent,
    SecHeroPowerstatsComponent,
    SecHeroAppearanceComponent,
    SecHeroBiographyComponent,
    SecHeroConnectionsComponent,
    SecHeroImagesComponent,
    SecHeroWorkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroesRoutingModule,
    PipesModule,
  ],
})
export class HeroesModule {}
