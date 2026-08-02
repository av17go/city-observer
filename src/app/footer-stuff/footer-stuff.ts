import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-stuff',
  imports: [],
  templateUrl: './footer-stuff.html',
  styleUrl: './footer-stuff.css'
})
export class FooterStuff {

  currentYear = new Date().getFullYear();

}
