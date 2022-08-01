import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../models/user.model';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
    @ViewChild('SignInForm') private signInForm!: ElementRef<HTMLFormElement>;

    public constructor(private router: Router, private authService: AuthService) {}

    public validity: boolean = true;

    public user: User = {
        username: '',
        password: '',
        email: '',
    };

    public async handleSubmit(): Promise<void> {
        if (this.signInForm.nativeElement.checkValidity()) {
            const isLoggedIn = await this.authService.login(this.user);
            await this.authService.isLoggedIn();
            if (isLoggedIn) await this.router.navigateByUrl('/');
        } else {
            this.validity = this.signInForm.nativeElement.checkValidity();
        }
    }
}
