import { TestBed } from '@angular/core/testing';

import { BskyAgent } from './bsky-agent';

describe('BskyAgent', () => {
  let service: BskyAgent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BskyAgent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
