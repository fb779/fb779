import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTrainingComponent } from './welcome-training.component';

describe('WelcomeTrainingComponent', () => {
  let component: WelcomeTrainingComponent;
  let fixture: ComponentFixture<WelcomeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
