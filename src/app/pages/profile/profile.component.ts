import {Component} from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public constructor(public authService: AuthService) {}
    public async logout(): Promise<void> {
        await this.authService.logout();
        location.reload();
    }
}
