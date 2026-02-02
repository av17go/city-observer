import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';


dotenv.config();


console.clear();



const agent = new AtpAgent({
  service: 'https://bsky.social'
});


const session = await agent.login({
  identifier: process.env.IDENTIFIER,
  password: process.env.PASS,
});

const uri = `at://${process.env.DID_PLC}/app.bsky.feed.post/3m7gfdtarmk2j`;

// console.log('Logged in as:', agent.session?.handle);

// const profile = await agent.getProfile({actor: process.env.DID_PLC});

const posts = await agent.getPosts({uris: [uri]});


// console.log(profile);



console.log(posts.data.posts.length);
// console.log(JSON.stringify(posts.data,null,2));

// posts.forEach(post => {
//   const log = post.record.text;
//   console.log(log);
// });


// Fetch and log the user's feed
const response = await agent.getAuthorFeed({
  actor: process.env.DID_PLC
});
// const feed = await agent.getTimeline()
// console.log(feed.data.feed);

// console.log(JSON.stringify(feed.data.feed, null, 3));

// response.data.feed.forEach((post) => {
//   console.log(JSON.stringify(post.post, null, 4)); 
// });

const postsJson = response.data.feed.map((item) => {
  return {
    title: '',
    content: item.post.record.text,
    image: item.post.embed.images,
  }
});

console.log(JSON.stringify(postsJson, null, 4));

// write JSON to workspace file
const outPath = path.resolve(process.cwd(), 'public', 'posts.json');
console.log('Writing posts to', outPath);
await fs.writeFile(outPath, JSON.stringify(postsJson, null, 2), 'utf8');

console.log('Wrote posts to', outPath);

