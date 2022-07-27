import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isMobileNavOpen: boolean = false;

    public navButtonHandler(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public homePageHandler(): void {
        this.isMobileNavOpen = false;
    }

    public isLoggedIn: boolean = false;

    public constructor(private authService: AuthService) {
        this.initializeVariables().then();
    }

    private async initializeVariables(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
