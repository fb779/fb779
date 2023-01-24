import { Component, Input, OnInit } from '@angular/core';
import { Movie, Search } from '@movies/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Search;

  constructor() {}

  ngOnInit(): void {}
}
