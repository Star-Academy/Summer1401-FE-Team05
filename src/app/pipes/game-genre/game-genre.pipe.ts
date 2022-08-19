import {Pipe, PipeTransform} from '@angular/core';
import {Game} from '../../models/game.model';

@Pipe({
    name: 'gameGenre',
})
export class GameGenrePipe implements PipeTransform {
    public transform(game: Game): number {
        return game?.genres && game.genres[0] ? game.genres[0].id : 0;
    }
}
