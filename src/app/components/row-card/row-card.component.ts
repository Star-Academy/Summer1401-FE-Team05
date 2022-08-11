import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-row-card',
    templateUrl: './row-card.component.html',
    styleUrls: ['./row-card.component.scss'],
})
export class RowCardComponent {
    public constructor(private apiService: ApiService) {}

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() cardGame: any = null;
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Output() newRefreshWishlistEventEmitter = new EventEmitter<void>();

    public async deleteWishlistItem(_id: number): Promise<void> {
        const token = await localStorage.getItem('token');
        await this.apiService.deleteRequest<void>('https://api.bijanprogrammer.com/games//wishlist/remove', {
            token: token,
            gameId: _id,
        });

        this.newRefreshWishlistEventEmitter.emit();
    }
}
