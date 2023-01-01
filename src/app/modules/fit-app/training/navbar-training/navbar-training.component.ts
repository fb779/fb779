import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-training',
  templateUrl: './navbar-training.component.html',
  styleUrls: ['./navbar-training.component.scss'],
})
export class NavbarTrainingComponent {
  @Output() sideNavToggle: EventEmitter<void> = new EventEmitter<void>();
}
