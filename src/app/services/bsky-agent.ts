import { Injectable } from '@angular/core';
import { AtpAgent } from '@atproto/api'

@Injectable({
  providedIn: 'root'
})
export class BskyAgentService {
  publicUrl = 'https://public.api.bsky.app';
  didPlc = 'did:plc:2ne7sc2wnu254aodqjapoxbd';

  agent: AtpAgent;

  constructor() {
    this.agent = new AtpAgent({ service: this.publicUrl });
  }
  
  async getPosts(){
    // Fetch the user's feed
    const response = await this.agent.getAuthorFeed({
      actor: this.didPlc
    });

    return this.mapFeed(response.data.feed);
  }

  mapFeed(response: any) {
    return response.map((item: any) => {
      return {
        title: '',
        content: item.post.record.text,
        image: item.post.embed.images,
      };
    });
  }
}
