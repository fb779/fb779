import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-pagination',
  templateUrl: './movie-pagination.component.html',
  styleUrls: ['./movie-pagination.component.scss'],
})
export class MoviePaginationComponent implements OnInit {
  @Input('length') length: NumberInput = 0;
  @Input('pageSize') pageSize: NumberInput = 10;
  @Input('pageIndex') pageIndex: NumberInput = 0;
  @Output() changePage: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit(): void {
    console.log(this.pageIndex);
  }
}
