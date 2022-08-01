import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService) {}

    public isMobileNavOpen: boolean = false;

    public navButtonHandler(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public homePageHandler(): void {
        this.isMobileNavOpen = false;
    }
}
