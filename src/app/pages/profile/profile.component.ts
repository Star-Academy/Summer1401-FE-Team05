import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';
import {User} from '../../models/user.model';
import {API_WISHLIST_ALL} from '../../utils/urls';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public constructor(private authService: AuthService, private apiService: ApiService) {
        this.getAllWishlist().then();
        this.getUser().then();
    }

    public user?: User;

    public async logout(): Promise<void> {
        await this.authService.logout();
    }

    public wishlist: any = null;

    private async getAllWishlist(): Promise<void> {
        const token = localStorage.getItem('token');

        const data = await this.apiService.postRequest<any>(API_WISHLIST_ALL, {
            token: token,
        });

        this.wishlist = await data?.games;
    }

    public refreshWishlist(): void {
        this.getAllWishlist().then();
    }

    private async getUser(): Promise<void> {
        // @ts-ignore
        const {id} = await this.authService.auth();

        // @ts-ignore
        const {user} = await this.authService.getUserData(id);

        this.user = user;
    }
}
