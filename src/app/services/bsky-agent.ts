import { Injectable } from '@angular/core';
import { AtpAgent } from '@atproto/api'

@Injectable({
  providedIn: 'root'
})
export class BskyAgentService {

  agent: AtpAgent;

  constructor() {
    this.agent = new AtpAgent({ service: 'https://bsky.social' });
  }
  
  async getPosts(){
    const { data } = await this.agent.getProfile({ actor: 'cityobserver.bsky.social' });
    const { did, displayName } = data;
    debugger; 
  }
}
