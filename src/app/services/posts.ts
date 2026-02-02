import { Injectable } from '@angular/core';
import posts from '../../../public/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  async getPosts(){
    // console.log(posts);
    // debugger;
    return Promise.resolve(posts);
  }
}
