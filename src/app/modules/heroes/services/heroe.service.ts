import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
import { Hero } from '../models/hero';
import { DATA_LIST } from '../models/data';


const urlApi = `https://akabab.github.io/superhero-api/api/all.json`;

@Injectable({
  providedIn: 'root',
})
export class HeroeService {

  private listHeroBS: BehaviorSubject<Hero[]> = new BehaviorSubject(DATA_LIST);
  private heroBS: Subject<Hero> = new Subject();


  get heroesRresponse$(): Observable<Hero[]> {
    return this.listHeroBS.asObservable();
    // return this.http.get<Hero[]>(urlApi).pipe(
    //   catchError((err) => {
    //     console.error(err.message)
    //     return of([]);
    //   })
    // );
  }



  get listHeroes$(): Observable<Hero[]> {
    return this.heroesRresponse$
  }

  get hero$(): Observable<Hero | null> {
    return this.heroBS.asObservable();
  }

  set heroChosing(hero: Hero | null) {
    hero && this.heroBS.next(hero); // if hero is different to null they will emit the hero
  }

  constructor(private http: HttpClient) {
    // this.http.get<Hero[]>(urlApi).pipe(
    //   catchError((err) => {
    //     console.error(err.message)
    //     return of([]);
    //   })
    // ).subscribe((data) => {
    //   this.listHeroBS.next(data);
    // });
  }

  // getHero(id: string) { }

  saveHero(hero: Hero) {
    const newId = this.listHeroBS.getValue().length + 1;

    hero.id = newId;

    const listTemHeroes = [...this.listHeroBS.getValue(), hero];

    this.listHeroBS.next(listTemHeroes);
  }

  // updateHero(id: string, hero: Hero) { }

  deleteHero(id: number) {
    const listTemHeroes = this.listHeroBS.getValue().filter(hr => hr.id != id);
    this.listHeroBS.next(listTemHeroes);
  }
}
