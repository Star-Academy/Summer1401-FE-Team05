import {Injectable} from '@angular/core';
import * as URLS from '../utils/urls';
import {ApiService} from './api.service';
import {User} from '../models/user.model';
import {Token} from '../models/token.model';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isUserLoggedIn: boolean = false;

    public constructor(private apiService: ApiService, private router: Router) {
        this.isLoggedIn().then();
    }

    public async login(user: User): Promise<boolean> {
        const data = await this.apiService.postRequest<Token>(URLS.API_USER_LOGIN, user);

        if (data?.token) {
            localStorage.setItem('token', data.token);
        }

        return !!data;
    }

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.postRequest<{id: number}>(URLS.API_USER_AUTH, {token});

        this.isUserLoggedIn = !!data;

        return !!data;
    }

    public async signUp(user: User): Promise<boolean> {
        const data = await this.apiService.postRequest<Token>(URLS.API_USER_REGISTER, user);

        if (data?.token) {
            localStorage.setItem('token', data.token);
        }

        return !!data;
    }

    public async logout(): Promise<void> {
        localStorage.removeItem('token');
        this.isUserLoggedIn = false;

        await this.router.navigateByUrl('/');
    }
}
