import { Component } from '@angular/core';

// Created by Qwen AI lol.
@Component({
  selector: 'purple-rectangle',
  template: `
    <div class="purple-rectangle"></div>
  `,
  styles: [`
    .purple-rectangle {
      width: 200px;
      height: 150px;
      background-color: #8e44ad; /* Purple color */
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class PurpleRectangleComponent {
}
