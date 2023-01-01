import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wrapper-training',
  templateUrl: './wrapper-training.component.html',
  styleUrls: ['./wrapper-training.component.scss'],
})
export class WrapperTrainingComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fit-App - Training');
  }
}
