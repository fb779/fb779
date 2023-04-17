import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Hero } from '../models/hero';

const urlApi = `https://akabab.github.io/superhero-api/api/all.json`;

@Injectable({
  providedIn: 'root',
})
export class HeroeService {

  private heroBS: Subject<Hero> = new Subject();

  heroesRresponse$: Observable<Hero[]> = this.http.get<Hero[]>(urlApi).pipe(
    catchError((err) => {
      console.error(err.message)
      return of([]);
    })
  );

  get listHeroes$(): Observable<Hero[]> {
    return this.heroesRresponse$
  }

  get hero$(): Observable<Hero | null> {
    return this.heroBS.asObservable();
  }

  set heroChosing(hero: Hero | null) {
    hero && this.heroBS.next(hero); // if hero is different to null they will emit the hero
  }

  constructor(private http: HttpClient) { }

  // getHero(id: string) { }

  // saveHero(hero: Hero) { }

  // updateHero(id: string, hero: Hero) { }

  // deleteHero(id: string) { }
}
