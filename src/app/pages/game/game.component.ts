import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private authService: AuthService,
        private router: Router
    ) {}

    private gameId!: number;

    public currentGame: any;

    public ngOnInit(): void {
        this.getGameId();
    }

    private getGameId(): void {
        this.gameId = Number(this.route.snapshot.paramMap.get('id'));

        this.getGameData(this.gameId).then();
    }

    private async getGameData(_id: number): Promise<void> {
        const response = await fetch(`https://api.bijanprogrammer.com/games/one/${_id}`);
        const data = await response.json();

        this.currentGame = await data.game;
    }

    public async addToWishlist(): Promise<void> {
        if (!this.authService.isUserLoggedIn) {
            await this.router.navigateByUrl('/sign-in');
            return;
        }

        const token = await localStorage.getItem('token');
        const fetchBody = {
            token: token,
            gameId: this.currentGame.id,
        };

        await fetch('https://api.bijanprogrammer.com/games/wishlist/add', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fetchBody),
        });
    }
}
