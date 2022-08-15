import {Component, Input} from '@angular/core';
import {Game} from '../../../models/game.model';

@Component({
    selector: 'app-card-grid',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent {
    @Input() public gamesData: Game[] | null = null;
}
