import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroImagesComponent } from './sec-hero-images.component';

describe('SecHeroImagesComponent', () => {
  let component: SecHeroImagesComponent;
  let fixture: ComponentFixture<SecHeroImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
