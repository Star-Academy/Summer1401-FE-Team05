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

    public user?: User | null;
    public wishlist: any = null;

    public async logout(): Promise<void> {
        await this.authService.logout();
    }

    private async getAllWishlist(): Promise<void> {
        const token = localStorage.getItem('token');

        const data = await this.apiService.postRequest<any>(API_WISHLIST_ALL, {token});

        this.wishlist = data?.games;
    }

    public async refreshWishlist(): Promise<void> {
        await this.getAllWishlist();
    }

    private async getUser(): Promise<void> {
        const response = await this.authService.auth();

        const id = response?.id;

        if (!!id) {
            const userData = await this.authService.getUserData(id);

            this.user = userData?.user;
        }
    }
}
