import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTrainingComponent } from './wrapper-training.component';

describe('WrapperTrainingComponent', () => {
  let component: WrapperTrainingComponent;
  let fixture: ComponentFixture<WrapperTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
