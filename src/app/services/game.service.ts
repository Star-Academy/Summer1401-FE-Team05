import {Injectable} from '@angular/core';
import {Game} from '../models/game.model';
import {API_GAME_ONE} from '../utils/urls';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public async getGameData(_id: number): Promise<Game> {
        const response = await fetch(API_GAME_ONE + _id);
        const data = await response.json();

        return data.game;
    }
}
