import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {ApiService} from '../../../services/api.service';
import {FetchCategoriesDataService} from '../../../services/fetch-categories-data.service';
import {Category} from '../../../components/header/categories/model/category';
import {API_GAME_SEARCH} from '../../../utils/urls';
import {Game} from "../../../models/game.model";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    @ViewChild('scrollCards') private scrollCards!: ElementRef<HTMLElement>;

    @Input() public subId?: number;
    @Input() public subIndex: string = '';

    public someGame!: Game[];

    public categories: Category[];

    public next(): void {
        this.scrollCards.nativeElement.scrollBy(-250, 0);
    }
    public prev(): void {
        this.scrollCards.nativeElement.scrollBy(250, 0);
    }

    public constructor(private apiService: ApiService, private fetchCategoriesData: FetchCategoriesDataService) {
        this.categories = fetchCategoriesData.fetchData();
    }

    public ngOnInit(): void {
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
                genres: !!this.subId ? [this.subId] : [],
                keywords: [],
                platforms: [],
                playerPerspectives: [],
                themes: [],
                minimumRating: 70,
                maximumRating: 99,
            },
        };

        const data = await this.apiService.postRequest<any>(API_GAME_SEARCH, searchSetting);

        this.someGame = data?.games;
    }
}
