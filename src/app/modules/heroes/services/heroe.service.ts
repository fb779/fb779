import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { Hero } from '../models/hero';
// import { DATA_LIST } from '../models/data';

import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private DATA_LIST: Hero[] = [];
  private listBS: BehaviorSubject<Hero[]> = new BehaviorSubject(this.DATA_LIST);
  // private heroBS: BehaviorSubject<Hero> = new BehaviorSubject(DATA_LIST[0]);
  private heroBS: Subject<Hero> = new Subject();

  get hero$(): Observable<Hero | null> {
    return this.heroBS.asObservable();
  }

  set heroChosing(hero: Hero) {
    this.heroBS.next(hero);
  }

  get listHeroes$(): Observable<Hero[]> {
    return this.listBS.asObservable();
  }

  constructor(private http: HttpClient, private storeService: StoreService) {
    this.getheroData()
      .pipe(
        // tap((data) => this.storeService.saveData('heroes', data)),
        // tap((data) => console.log('data cargada', data)),
        // map((data) => {
        //   console.log(data);
        //   return data.map((hero) => {
        //     hero.appearance.height = hero.appearance.height[1];
        //     hero.appearance.weight = hero.appearance.weight[1];
        //     if (hero.id == 1) console.log(hero);
        //     return hero;
        //   });
        // }),
        tap((data) => this.listBS.next(data))
      )
      .subscribe();
  }

  private getheroData(): Observable<Hero[]> {
    const urlApi = `https://akabab.github.io/superhero-api/api/all.json`;
    return this.http.get<Hero[]>(urlApi);
  }

  getHero(id: string) {}

  saveHero(hero: Hero) {}

  updateHero(id: string, hero: Hero) {}

  deleteHero(id: string) {}
}
