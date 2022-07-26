import {Component} from '@angular/core';

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
}
