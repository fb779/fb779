import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-menu-training',
    templateUrl: './menu-training.component.html',
    styleUrls: ['./menu-training.component.scss'],
})
export class MenuTrainingComponent {
    @Output() sideNavToggle: EventEmitter<void> = new EventEmitter<void>();
}
