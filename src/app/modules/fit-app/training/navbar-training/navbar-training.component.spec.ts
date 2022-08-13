import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTrainingComponent } from './navbar-training.component';

describe('NavbarTrainingComponent', () => {
  let component: NavbarTrainingComponent;
  let fixture: ComponentFixture<NavbarTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
