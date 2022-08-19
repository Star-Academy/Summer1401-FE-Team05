import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isMobileNavOpen: boolean = false;
    public searchText: string | null = null;

    public constructor(public authService: AuthService, private router: Router) {}

    public navButtonHandler(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public handleSubmit(): void {
        this.router.navigate(['/search'], {queryParams: {searchText: this.searchText}}).then();
    }

    public closeNav(): void {
        this.isMobileNavOpen = false;
    }
}
