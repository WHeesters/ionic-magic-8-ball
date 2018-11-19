import {TestBed} from '@angular/core/testing';

import {MagicBallService} from './magic-ball.service';

let magicBall = null;

describe('MagicBallService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => {
        magicBall = new MagicBallService();
    });

    it('should be created', () => {
        const service: MagicBallService = TestBed.get(MagicBallService);
        expect(service).toBeTruthy();
    });
    it('should return a non empty array', () => {
        let result = magicBall.getAnswers();

        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
    });
    it('should return one random answer as a string', () => {
        expect(typeof magicBall.getRandomAnswer()).toBe('string');
    });
    it('should have both yes and no available in result set', () => {

        let result = magicBall.getAnswers();

        expect(result).toContain('Yes');
        expect(result).toContain('No');

    });
});
