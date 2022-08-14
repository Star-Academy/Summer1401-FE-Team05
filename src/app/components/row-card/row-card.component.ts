import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {API_WISHLIST_REMOVE} from '../../utils/urls';

@Component({
    selector: 'app-row-card',
    templateUrl: './row-card.component.html',
    styleUrls: ['./row-card.component.scss'],
})
export class RowCardComponent implements OnInit {
    public constructor(private apiService: ApiService) {}
    public sale: number = 0;

    @Input() public cardGame: any = null;

    @Output() public newRefreshWishlistEventEmitter = new EventEmitter<void>();

    public async deleteWishlistItem(_id: number): Promise<void> {
        const token = localStorage.getItem('token');
        await this.apiService.deleteRequest(API_WISHLIST_REMOVE, {
            token: token,
            gameId: _id,
        });

        this.newRefreshWishlistEventEmitter.emit();
    }

    public ngOnInit(): void {
        this.sale =
            this.cardGame?.priceOnSale === this.cardGame?.price
                ? 0
                : Math.round(100 * (1 - Number(this.cardGame?.priceOnSale) / Number(this.cardGame?.price)));
    }
}
