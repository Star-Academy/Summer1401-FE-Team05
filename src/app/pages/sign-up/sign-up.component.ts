import {Component, ElementRef, ViewChild} from '@angular/core';

import {User} from '../../models/user.model';

import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
    @ViewChild('SignUpForm') private signUpForm!: ElementRef<HTMLFormElement>;

    public constructor(private router: Router, private authService: AuthService) {}

    public user: User = {
        username: '',
        password: '',
        email: '',
    };

    public async handleSubmit(): Promise<void> {
        if (this.signUpForm.nativeElement.checkValidity()) {
            const isInfoOK = await this.authService.signUp(this.user);
            if (isInfoOK) location.replace('profile');
        }
    }
}
