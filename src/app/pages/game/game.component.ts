import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public constructor(private route: ActivatedRoute, private apiService: ApiService) {}

    private gameId!: number;

    public currentGame: any;

    public ngOnInit(): void {
        this.getGameId();
    }

    private getGameId(): void {
        this.gameId = Number(this.route.snapshot.paramMap.get('id'));

        this.getGameData(this.gameId);
    }

    private async getGameData(_id: number): Promise<void> {
        // const data = await this.apiService.getRequest<any>(`https://api.bijanprogrammer.com/games/one/${_id}`);

        const response = await fetch(`https://api.bijanprogrammer.com/games/one/${_id}`);
        const data = await response.json();

        await console.log(data.game);
    }
}
