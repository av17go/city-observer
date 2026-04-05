import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomRotate]'
})
export class RandomRotate {
  constructor(private el: ElementRef) { }

  // add a random rotation to the element
  ngOnInit() {
    const randomRotation = (Math.random() - 1) * 3.5; // random rotation between -4 and 0 degrees
    this.el.nativeElement.style.transform = `rotate(${randomRotation}deg)`;
  }
}
