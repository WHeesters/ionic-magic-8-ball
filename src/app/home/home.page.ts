import {Component} from '@angular/core';
import {MagicBallService} from '../magic-ball.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    answer: any = '...';

    constructor(public magicBall: MagicBallService) {

    }

    showAnswer() {
        this.answer = this.magicBall.getRandomAnswer();
    }

}
