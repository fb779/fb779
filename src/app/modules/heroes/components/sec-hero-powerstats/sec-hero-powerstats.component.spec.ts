import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroPowerstatsComponent } from './sec-hero-powerstats.component';

describe('SecHeroPowerstatsComponent', () => {
  let component: SecHeroPowerstatsComponent;
  let fixture: ComponentFixture<SecHeroPowerstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroPowerstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroPowerstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
