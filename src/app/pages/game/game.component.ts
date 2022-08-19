import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';
import {API_WISHLIST_ADD} from '../../utils/urls';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public currentGame: Game = {
        id: 0,
        name: '',
        screenshots: [],
        genres: [],
    };

    public constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router,
        private gameService: GameService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    public async ngOnInit(): Promise<void> {
        const gameId = this.getGameId();

        this.currentGame = await this.gameService.getGameData(gameId);
    }

    private getGameId(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    public async addToWishlist(): Promise<void> {
        if (!this.authService.isUserLoggedIn) {
            await this.router.navigateByUrl('/sign-in');
        }

        const token = localStorage.getItem('token');
        const fetchBody = {
            token: token,
            gameId: this.currentGame?.id,
        };

        await fetch(API_WISHLIST_ADD, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fetchBody),
        });
    }
}
