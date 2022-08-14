import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-grid',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent {
    @Input() public gamesData: object[] | null = null;
}
