import {Component} from '@angular/core';

import {NgxPopperjsPlacements} from 'ngx-popperjs';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;
}
