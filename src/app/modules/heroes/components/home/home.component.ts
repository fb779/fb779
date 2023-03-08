import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HeroeService } from '../../services/heroe.service';
import { Hero, Actions, ActionEmit } from '../../models/hero';
// import { HeroFormComponent } from '../hero-form/hero-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listHeroes$: Observable<Hero[]> = this.heroService.listHeroes$;

  hero$: Observable<Hero | null> = this.heroService.hero$;

  constructor(private heroService: HeroeService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  actionHero(data: ActionEmit) {
    // console.log(data);
    switch (data.action) {
      case Actions.open:
        {
          this.openHero(data.hero);
        }
        break;

      // case Actions.edit:
      //   {
      //     this.editHero(data);
      //   }
      //   break;

      // case Actions.delete: {
      //   this.heroService.heroChosing = data.hero;
      // }
    }
  }

  private openHero(hero: Hero) {
    this.heroService.heroChosing = hero;
  }

  // private openHeroForm() {
  //   const dialogRef = this.dialog.open(HeroFormComponent, {
  //     width: '90%',
  //     height: '80%',
  //     data: {},
  //   });

  //   // dialogRef.afterClosed().subscribe((result) => {
  //   //   console.log('The dialog was closed');
  //   //   // this.animal = result;
  //   // });
  // }

  // private editHero(actionData: ActionEmit) {
  //   const dialogRef = this.dialog.open(HeroFormComponent, {
  //     // width: '250px',
  //     height: '90%',
  //     data: { ...actionData },
  //   });

  //   // dialogRef.afterClosed().subscribe((result) => {
  //   //   console.log('The dialog was closed');
  //   //   // this.animal = result;
  //   // });
  // }
}
