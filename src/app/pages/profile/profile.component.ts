import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public constructor(public authService: AuthService, private apiService: ApiService) {
        this.getAllWishlist().then();
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
    }

    public wishlist: any = null;

    private async getAllWishlist(): Promise<void> {
        const token = await localStorage.getItem('token');

        const data = await this.apiService.postRequest<any>('https://api.bijanprogrammer.com/games/wishlist/all', {
            token: token,
        });

        this.wishlist = await data?.games;
    }

    public refreshWishlist(): void {
        this.getAllWishlist().then();
    }
}
