import {Component} from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public className: string = 'search-box';

    public handleClick(): void {
        if (this.className === 'search-box') {
            this.className = 'search-box show';
        } else {
            this.className = 'search-box';
        }
    }
}
