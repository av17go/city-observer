import { Injectable } from '@angular/core';
import posts from './posts.json'; // Assuming posts.json is in the data folder

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
