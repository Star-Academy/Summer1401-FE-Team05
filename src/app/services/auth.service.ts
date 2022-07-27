import {Injectable} from '@angular/core';

import * as URLS from '../utils/urls';

import {ApiService} from './api.service';

import {User} from '../models/user.model';
import {Token} from '../models/token.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async login(user: User): Promise<boolean> {
        const data = await this.apiService.post<Token>(URLS.API_USER_LOGIN, user);

        if (data?.token) {
            localStorage.setItem('token', data.token);
        }

        return !!data;
    }

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.post<{id: number}>(URLS.API_USER_AUTH, {token});
        return !!data;
    }

    public async signUp(user: User): Promise<boolean> {
        const data = await this.apiService.post<Token>(URLS.API_USER_REGISTER, user);

        if (data?.token) {
            localStorage.setItem('token', data.token);
        }

        return !!data;
    }
}
