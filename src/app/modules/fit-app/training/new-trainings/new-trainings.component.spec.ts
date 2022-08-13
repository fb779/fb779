import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingsComponent } from './new-trainings.component';

describe('NewTrainingsComponent', () => {
  let component: NewTrainingsComponent;
  let fixture: ComponentFixture<NewTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTrainingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
