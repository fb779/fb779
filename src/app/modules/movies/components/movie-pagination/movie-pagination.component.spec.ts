import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePaginationComponent } from './movie-pagination.component';

describe('MoviePaginationComponent', () => {
  let component: MoviePaginationComponent;
  let fixture: ComponentFixture<MoviePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
