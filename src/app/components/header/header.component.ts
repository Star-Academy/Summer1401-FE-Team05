import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isLoggedIn: boolean = false;

    public constructor(public authService: AuthService) {
        this.initializeVariables().then();
    }

    private async initializeVariables(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }

    public isMobileNavOpen: boolean = false;

    public navButtonHandler(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public homePageHandler(): void {
        this.isMobileNavOpen = false;
    }
}
