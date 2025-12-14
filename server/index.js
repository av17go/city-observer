import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
dotenv.config();



const agent = new AtpAgent({
  service: 'https://bsky.social'
});


const session = await agent.login({
  identifier: process.env.IDENTIFIER,
  password: process.env.PASS,
});

console.log('Logged in as:', agent.session?.handle);

const profile = await agent.getProfile({actor: process.env.DID_PLC});

// const posts = await agent.getPosts({uris: profile.data.handle});


console.log(profile);

// console.log(posts);


// Fetch and log the user's feed
// const feed = await agent.getTimeline()
// console.log(feed.data.feed)

