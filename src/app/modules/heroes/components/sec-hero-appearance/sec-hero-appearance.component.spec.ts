import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroAppearanceComponent } from './sec-hero-appearance.component';

describe('SecHeroAppearanceComponent', () => {
  let component: SecHeroAppearanceComponent;
  let fixture: ComponentFixture<SecHeroAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroAppearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
