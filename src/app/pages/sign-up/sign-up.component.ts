import {Component} from '@angular/core';
// import {Router} from '@angular/router';

import {User} from '../../models/user.model';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
    public constructor(private router: Router, private authService: AuthService) {}

    public user: User = {
        username: '',
        password: '',
        email: '',
    };

    public async handleSubmit(): Promise<void> {
        const validation = this.isValidate(this.user);
        if (/\S+@\S+\.\S+/.test(this.user.email) && this.user.username && this.user.password) {
            const isInfoOK = await this.authService.signUp(this.user);
            if (isInfoOK) location.replace('profile');
        } else {
            console.log('email is not validate', this.user.email);
        }
    }

    public isValidate(_user: User): boolean {
        return true;
    }
}
