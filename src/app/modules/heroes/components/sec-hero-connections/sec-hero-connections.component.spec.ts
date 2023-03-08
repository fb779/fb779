import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroConnectionsComponent } from './sec-hero-connections.component';

describe('SecHeroConnectionsComponent', () => {
  let component: SecHeroConnectionsComponent;
  let fixture: ComponentFixture<SecHeroConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecHeroConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
