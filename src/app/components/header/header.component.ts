import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService, private router: Router) {}

    public isMobileNavOpen: boolean = false;

    public navButtonHandler(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
    }

    public searchText: string | null = null;

    public handleSubmit(): void {
        this.router.navigate(['/search'], {queryParams: {order: this.searchText}}).then();

        console.log(this.searchText);
    }
}
