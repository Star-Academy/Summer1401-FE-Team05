import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../models/user.model';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
    public constructor(private router: Router, private authService: AuthService) {}

    public user: User = {
        username: '',
        password: '',
        email: '',
    };

    public async handleSubmit(): Promise<void> {
        const isLoggedIn = await this.authService.login(this.user);
        if (isLoggedIn) await this.router.navigateByUrl('/');
    }
}
