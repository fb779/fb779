import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, MovieSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    MaterialModule,
  ],
})
export class MoviesModule {}
