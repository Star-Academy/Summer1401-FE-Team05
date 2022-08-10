import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-grid',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() gamesData: object[] | null = null;
}
