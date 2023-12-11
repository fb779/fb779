import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero, Actions, ActionEmit } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  @Input('list') listHeroes!: Hero[];
  @Output() action: EventEmitter<ActionEmit> = new EventEmitter();

  actions = Actions;

  displayedColumns: string[] = ['name', 'race', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  emitAction(action: Actions, hero: Hero | null = null): void {
    this.action.emit({ action, hero });
  }
}
