import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurpleRectangleComponent } from './purple-rectangle';

describe('PurpleRectangleComponent', () => {
  let component: PurpleRectangleComponent;
  let fixture: ComponentFixture<PurpleRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurpleRectangleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PurpleRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a purple rectangle', () => {
    const container = fixture.nativeElement.querySelector('.purple-rectangle');
    
    // Use getComputedStyle to check the actual rendered style
    const computedStyle = window.getComputedStyle(container);
    const backgroundColor = computedStyle.backgroundColor;

    expect(backgroundColor).toBe('#8e44ad');
  });
});
