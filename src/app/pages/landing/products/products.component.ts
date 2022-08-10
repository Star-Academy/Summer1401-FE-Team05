import {Component, ElementRef, ViewChild} from '@angular/core';

import {cards} from './sample-data';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    @ViewChild('scrollCards') private scrollCards!: ElementRef<HTMLElement>;

    public next(): void {
        this.scrollCards.nativeElement.scrollBy(-250, 0);
    }
    public prev(): void {
        this.scrollCards.nativeElement.scrollBy(250, 0);
    }

    public someGame: any = cards;

    public constructor(private apiService: ApiService) {
        this.getSomeGame().then();
    }

    public async getSomeGame(): Promise<void> {
        const searchSetting = {
            searchPhrase: '',
            pageSize: 8,
            offset: 0,
            sort: 2,
            filters: {
                gameModes: [],
                genres: [],
                keywords: [],
                platforms: [],
                playerPerspectives: [],
                themes: [],
                minimumRating: 70,
                maximumRating: 99,
            },
        };

        const data = await this.apiService.postRequest<any>(
            'https://api.bijanprogrammer.com/games/search',
            searchSetting
        );

        this.someGame = data.games;
        console.log(this.someGame);
    }
}
