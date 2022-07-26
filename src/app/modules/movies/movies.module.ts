import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { NoImagenPipe } from '@app/pipes';

import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePaginationComponent } from './components/movie-pagination/movie-pagination.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieSearchComponent,
    MovieListComponent,
    MoviePaginationComponent,
    NoImagenPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    MaterialModule,
  ],
})
export class MoviesModule {}
