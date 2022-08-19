import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {SearchPost} from '../../models/search-post';
import {API_GAME_SEARCH} from '../../utils/urls';
import {SearchQueryParamsModel} from './model/searchQueryParams.model';
import {Game} from '../../models/game.model';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public searchProperty: SearchQueryParamsModel = {
        searchText: '',
        category: null,
        subCategory: null,
    };

    public constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    public gamesData!: Game[];
    public count: number = 0;

    public searchSetting: SearchPost = {
        searchPhrase: '',
        pageSize: 20,
        offset: 0,
        sort: 2,
        filters: {
            gameModes: [],
            genres: [],
            keywords: [],
            platforms: [],
            playerPerspectives: [],
            themes: [],
            minimumRating: 20,
            maximumRating: 99,
        },
    };

    public pageNumber: number = 1;

    public ngOnInit(): void {
        this.activatedRoute.queryParams
            .forEach((params) => {
                this.searchProperty.category = params?.category || null;
                this.searchProperty.subCategory = parseInt(params?.subCategory) || null;
                this.searchProperty.searchText = params?.searchText || '';
            })
            .then();

        if (!!this.searchProperty.category && !!this.searchProperty.subCategory) {
            this.searchSetting.filters[this.searchProperty.category] = [this.searchProperty.subCategory];
        } else if (!!this.searchProperty.searchText) {
            this.searchSetting.searchPhrase = this.searchProperty.searchText;
        }

        this.searchForData().then();
    }

    private async searchForData(): Promise<void> {
        const data = await this.apiService.postRequest<any>(API_GAME_SEARCH, this.searchSetting);

        this.count = await data?.count;

        this.gamesData = await data?.games;
    }

    public updateSearch(newSetting: any): void {
        this.searchSetting = JSON.parse(JSON.stringify(newSetting));
    }

    public async doSearch(): Promise<void> {
        await this.searchForData();
    }

    public nextPage(): void {
        this.searchSetting.offset += this.searchSetting.pageSize;
        this.pageNumber++;

        this.searchForData().then();
    }
    public prevPage(): void {
        if (this.searchSetting.offset > this.searchSetting.pageSize) {
            this.searchSetting.offset -= this.searchSetting.pageSize;

            this.pageNumber--;
        }

        this.searchForData().then();
    }
}
