import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroIdentityComponent } from './sec-hero-identity.component';

describe('SecHeroIdentityComponent', () => {
  let component: SecHeroIdentityComponent;
  let fixture: ComponentFixture<SecHeroIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
