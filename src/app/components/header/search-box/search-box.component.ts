import {Component} from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public isOpen: boolean = false;

    public handleClick(): void {
        this.isOpen = !this.isOpen;
    }
}
