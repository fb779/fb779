import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDialogDeleteComponent } from './hero-dialog-delete.component';

describe('HeroDialogDeleteComponent', () => {
  let component: HeroDialogDeleteComponent;
  let fixture: ComponentFixture<HeroDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDialogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
