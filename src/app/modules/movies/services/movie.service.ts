import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
  switchMap,
} from 'rxjs';
import { MovieResponse, Search, Movie } from '@movies/models';
import { NumberInput } from '@angular/cdk/coercion';

import {
  API_URL_BASE,
  API_KEY,
  DEFAULT_SEARCH_TERM,
} from '@movies/services/movies-config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private searchTermBS: BehaviorSubject<String> = new BehaviorSubject<String>(
    'super'
  );
  private actualPageBS: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  constructor(private http: HttpClient) {}

  get searchTem$(): Observable<String> {
    return this.searchTermBS.asObservable();
  }

  get actualPage$(): Observable<number> {
    return this.actualPageBS.asObservable();
  }

  get moviesResponse$(): Observable<MovieResponse> {
    return combineLatest([this.searchTem$, this.actualPage$]).pipe(
      switchMap((params) => this.http.get<MovieResponse>(this.getUrl(params))),
      shareReplay()
    );
  }

  get listMovies$(): Observable<Search[]> {
    return this.moviesResponse$.pipe(
      map<MovieResponse, Search[]>(({ Search }: MovieResponse) =>
        Search !== undefined ? Search : []
      )
    );
  }

  get totalMovies$(): Observable<NumberInput> {
    return this.moviesResponse$.pipe(
      map<MovieResponse, number>(({ totalResults }: MovieResponse) =>
        totalResults !== undefined ? totalResults : 0
      )
    );
  }

  set serachTerm(term: String) {
    if (this.searchTermBS.value != term) {
      this.actualPageBS.next(0);
    }
    this.searchTermBS.next(term);
  }

  set changePage(page: number) {
    this.actualPageBS.next(page);
  }

  private getUrl(params: any) {
    const [searchTerm, actualPage] = params;
    const term = searchTerm || DEFAULT_SEARCH_TERM;

    return `${API_URL_BASE}?apikey=${API_KEY}&page=${actualPage + 1}&s=${term}`;
  }
}
