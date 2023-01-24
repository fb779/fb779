import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberInput } from '@angular/cdk/coercion';
import { PageEvent } from '@angular/material/paginator';

import { MovieService } from '@movies/services/movie.service';
import { Movie, Search } from '@movies/models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  listMovies$: Observable<Search[]> = this.movieService.listMovies$;
  searchTerm$: Observable<String> = this.movieService.searchTem$;

  totalMovies$: Observable<NumberInput> = this.movieService.totalMovies$;
  actualPage$: Observable<NumberInput> = this.movieService.actualPage$;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  searchChange(term: String) {
    this.movieService.serachTerm = term;
  }

  changePageSize(pageEvent: PageEvent) {
    this.movieService.changePage = pageEvent.pageIndex;
  }
}
