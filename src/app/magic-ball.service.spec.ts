import { TestBed } from '@angular/core/testing';

import { MagicBallService } from './magic-ball.service';

describe('MagicBallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicBallService = TestBed.get(MagicBallService);
    expect(service).toBeTruthy();
  });
});
