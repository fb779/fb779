import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTrainingComponent } from './menu-training.component';

describe('MenuTrainingComponent', () => {
  let component: MenuTrainingComponent;
  let fixture: ComponentFixture<MenuTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
