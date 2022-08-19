import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public game!: Game;

    public imageSrc!: string;

    public ngOnInit(): void {
        if (!!this.game?.cover?.id) {
            this.imageSrc = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + this.game.cover.id + '.png';
        } else {
            this.imageSrc = 'assets/logos/image-solid.svg';
        }
    }
}
