import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStuff } from './footer-stuff';

describe('FooterStuff', () => {
  let component: FooterStuff;
  let fixture: ComponentFixture<FooterStuff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterStuff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterStuff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
