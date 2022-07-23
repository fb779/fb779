import { Component, Input } from '@angular/core';
import { Movie } from '@movies/models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  // HACK: I don't understan why i must to include the null definition on the input?
  // @Input('movies') movies!: Movie[];
  @Input('movies') movies: Movie[] = [];
}
