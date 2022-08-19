import {Pipe, PipeTransform} from '@angular/core';
import {Game} from '../../models/game.model';

@Pipe({
    name: 'gameBanner',
})
export class GameBannerPipe implements PipeTransform {
    public transform(game: Game): string {
        const id = game?.screenshots && game.screenshots[0] ? game.screenshots[0].id : game?.cover?.id;

        return `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${id}.webp`;
    }
}
