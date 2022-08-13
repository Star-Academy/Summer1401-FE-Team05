import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-row-card',
    templateUrl: './row-card.component.html',
    styleUrls: ['./row-card.component.scss'],
})
export class RowCardComponent implements OnInit {
    public constructor(private apiService: ApiService) {}

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() cardGame: any = null;
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Output() newRefreshWishlistEventEmitter = new EventEmitter<void>();

    public async deleteWishlistItem(_id: number): Promise<void> {
        const token = localStorage.getItem('token');
        await this.apiService.deleteRequest('https://api.bijanprogrammer.com/games//wishlist/remove', {
            token: token,
            gameId: _id,
        });

        this.newRefreshWishlistEventEmitter.emit();
    }

    public sale: number = 0;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-member-accessibility
    ngOnInit() {
        this.sale =
            this.cardGame?.priceOnSale === this.cardGame?.price
                ? 0
                : Math.round(100 * (1 - Number(this.cardGame?.priceOnSale) / Number(this.cardGame?.price)));
    }
}
