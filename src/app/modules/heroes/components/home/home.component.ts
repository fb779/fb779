import { HeroDialogDeleteComponent } from './../hero-dialog-delete/hero-dialog-delete.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HeroeService } from '../../services/heroe.service';
import { Hero, Actions, ActionEmit } from '../../models/hero';
import { HeroFormComponent } from '../hero-form/hero-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  listHeroes$: Observable<Hero[]> = this.heroService.listHeroes$;

  hero$: Observable<Hero | null> = this.heroService.hero$;

  constructor(private heroService: HeroeService, public dialog: MatDialog) {

  }



  ngOnInit(): void {
    console.log("ingreso al componente");
  }

  actionHero(data: ActionEmit) {
    console.log(data);
    switch (data.action) {
      case Actions.open:
        {
          this.showHero(data.hero);
        }
        break;

      case Actions.new:
      case Actions.edit:
        {
          this.openHeroForm(data);
        }
        break;

      case Actions.delete: {
        // this.heroService.heroChosing = data.hero;
        data.hero && this.deletehero(data.hero)
      }
    }
  }

  private showHero(hero: Hero | null) {
    this.heroService.heroChosing = hero;
  }

  private openHeroForm(actionData: ActionEmit) {
    const dialogRef = this.dialog.open(HeroFormComponent, {
      width: '95%',
      height: '90%',
      data: actionData,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  private deletehero(hero: Hero) {
    const dialogRef = this.dialog.open(HeroDialogDeleteComponent, {
      width: '50%',
      // height: '50%',
      data: hero,
      disableClose: true
    });

    dialogRef.afterClosed().pipe(
      tap((result) => {
        console.log('The dialog was closed', result);

        result && this.heroService.deleteHero(hero.id)
      })
    ).subscribe();
  }
}
