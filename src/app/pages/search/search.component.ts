import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {FetchCategoriesDataService} from '../../services/fetch-categories-data.service';
import {Category} from '../../components/header/categories/model/category';
import {SearchPost} from '../../models/search-post';
import {API_GAME_SEARCH} from '../../utils/urls';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public order: any = null;

    public constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        private fetchCategoriesDataService: FetchCategoriesDataService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    private categories: Category[] = this.fetchCategoriesDataService.fetchData();

    public gamesData: any;
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
        this.activatedRoute.queryParamMap.subscribe((params) => {
            this.order = {...params.keys, ...params};
        });

        if (!!this.order?.params?.category) {
            // @ts-ignore
            this.searchSetting.filters[this.order?.params?.category] =
                [Number.parseInt(this.order?.params?.subCategory)] ?? [];
        } else if (!!this.order?.params?.searchText) {
            this.searchSetting.searchPhrase = this.order?.params?.searchText ?? '';
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
