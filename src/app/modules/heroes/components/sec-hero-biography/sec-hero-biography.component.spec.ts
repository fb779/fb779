import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroBiographyComponent } from './sec-hero-biography.component';

describe('SecHeroBiographyComponent', () => {
  let component: SecHeroBiographyComponent;
  let fixture: ComponentFixture<SecHeroBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroBiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
