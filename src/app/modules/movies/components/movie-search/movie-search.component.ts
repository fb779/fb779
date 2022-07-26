import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinct,
  filter,
  fromEvent,
  map,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  @Input() search!: String | null;
  @Output() searchChange: EventEmitter<String> = new EventEmitter<String>();
  @ViewChild('inputSearch', { static: true }) inputSearch!: ElementRef;

  notifier$: Subject<any> = new Subject();

  ngOnInit(): void {
    fromEvent<Event>(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.notifier$),
        map<Event, String>((el: Event) => {
          return (el.target as HTMLInputElement).value;
        }),
        filter((searchTerm: String) => searchTerm.length >= 3),
        debounceTime(1500)
        // distinct()
      )
      .subscribe((term) => {
        if (term.length < 3) {
          return;
        }
        this.searchChange.emit(term);
      });
  }

  ngOnDestroy(): void {
    console.log('destruccion componente');
    this.notifier$.next('');
    this.notifier$.complete();
  }
}
