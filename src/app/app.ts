import { Component, inject, signal, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Post } from './post/post';
import { PostsService } from './services/posts';
import { CommonModule } from '@angular/common';
import { BskyAgentService } from './services/bsky-agent';
import { RandomRotate } from './random-rotate';

@Component({
  selector: 'app-root',
  imports: [Post, CommonModule, RandomRotate],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: [
    '../../node_modules/the-new-css-reset/css/reset.css', 
    '../../node_modules/bootstrap/dist/css/bootstrap.css',
    './app.css']

})
export class App {
  protected readonly title = signal('city-observer');

  @ViewChildren('postContainer') postContainers: any;

  postsService = inject(PostsService);
  bskyAgentService = inject(BskyAgentService);

  // posts$ = this.postsService.getPosts();
  posts$ = this.bskyAgentService.getPosts();

  constructor() {
    
    this.postsService.getPosts().then(posts => {
      console.log('Posts loaded:', posts);
    }).catch(error => {
      console.error('Error loading posts:', error);
    });
    
  }
}
