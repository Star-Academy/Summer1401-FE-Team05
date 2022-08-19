import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    public goToUp(): void {
        document.documentElement.scrollTop = 0;
    }
}
