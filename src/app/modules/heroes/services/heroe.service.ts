import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Hero } from '../models/hero';
import { DATA_LIST } from '../models/data';

import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private listBS: BehaviorSubject<Hero[]> = new BehaviorSubject(DATA_LIST);
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

  constructor(private storeService: StoreService) {}

  getHero(id: string) {}

  saveHero(hero: Hero) {}

  updateHero(id: string, hero: Hero) {}

  deleteHero(id: string) {}
}
