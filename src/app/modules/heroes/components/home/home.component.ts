import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeService } from '../../services/heroe.service';
import { Hero, Actions, ActionEmit } from '../../models/hero';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listHeroes$: Observable<Hero[]> = this.heroService.listHeroes$;

  hero$: Observable<Hero | null> = this.heroService.hero$;

  constructor(private heroService: HeroeService) {}

  ngOnInit(): void {}

  openHero(data: ActionEmit) {
    console.log(data);
    switch (data.action) {
      case Actions.open:
        {
          this.heroService.heroChosing = data.hero;
        }
        break;

      // case Actions.edit:
      //   {
      //     this.heroService.heroChosing = data.hero;
      //   }
      //   break;

      // case Actions.delete: {
      //   this.heroService.heroChosing = data.hero;
      // }
    }
  }
}
