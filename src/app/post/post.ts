import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [JsonPipe],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  @Input() post: any;
}
