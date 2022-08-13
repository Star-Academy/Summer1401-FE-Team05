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
    @ViewChild('signUpForm') private signUpForm!: ElementRef<HTMLFormElement>;

    private checkIsValid(): boolean {
        return this.signUpForm.nativeElement.checkValidity();
    }

    public validity: boolean = true;

    public constructor(private router: Router, private authService: AuthService) {}

    public user: User = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    };

    public async handleSubmit(): Promise<void> {
        if (this.checkIsValid()) {
            const result = await this.authService.signUp(this.user);
            if (result) await this.router.navigateByUrl('/');
        } else {
            this.validity = false;
        }
    }
}
