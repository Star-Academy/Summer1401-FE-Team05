import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public mobileNav: string = 'nav';

    public navButtonHandler(): void {
        if (this.mobileNav === 'nav open') {
            this.mobileNav = 'nav';
        } else {
            this.mobileNav = 'nav open';
        }
    }
}
