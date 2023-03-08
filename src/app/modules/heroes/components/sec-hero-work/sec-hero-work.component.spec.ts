import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroWorkComponent } from './sec-hero-work.component';

describe('SecHeroWorkComponent', () => {
  let component: SecHeroWorkComponent;
  let fixture: ComponentFixture<SecHeroWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
