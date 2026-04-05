import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomRotate]'
})
export class RandomRotate {
  constructor(private el: ElementRef) { }

  // add a random rotation to the element
  ngOnInit() {
    // random rotation between -4 and 4 degrees
    const randomRotation = (Math.random() * 8) - 4;
    this.el.nativeElement.style.transform = `rotate(${randomRotation}deg)`;
  }
}
