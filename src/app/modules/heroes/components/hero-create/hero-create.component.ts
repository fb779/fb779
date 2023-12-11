import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero, Actions, ActionEmit } from '../../models/hero';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent implements OnInit {
  @Output() action: EventEmitter<ActionEmit> = new EventEmitter();

  actions = Actions;

  constructor() { }

  ngOnInit(): void {
  }

  emitAction(action: Actions, hero: Hero | null = null): void {
    this.action.emit({ action, hero });
  }

}
