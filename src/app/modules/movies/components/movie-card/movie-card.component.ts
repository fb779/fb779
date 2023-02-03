import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie, Search } from '@movies/models';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { MovieService } from '../../services/movie.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input() movie!: Search;
  // @Output() openDialog: EventEmitter<Search> = new EventEmitter<Search>();
  notifier$: Subject<any> = new Subject();

  private dialogRef = this.dialog;

  constructor(public dialog: MatDialog, private movieService: MovieService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destruccion componente');
    this.notifier$.next('');
    this.notifier$.complete();
  }

  openDialog({ imdbID }: Search): void {
    this.movieService
      .getMovieId(imdbID.toString())
      .pipe(takeUntil(this.notifier$))
      .subscribe((movie) => {
        this.dialogRef.open(MovieDialogComponent, {
          width: '70%',
          height: '70%',

          data: movie,
        });
      });
    // this.dialogRef.open(MovieDialogComponent, {
    //   data: {},
    // });
  }
}
