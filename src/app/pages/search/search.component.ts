import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {CategoryFetchDataService} from '../../components/header/categories/services/category-fetch-data.service';
import {Category} from '../../components/header/categories/model/category';
import {SearchPost} from '../../models/search-post';

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
        private categoryFetchDataService: CategoryFetchDataService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    private categories: Category[] = this.categoryFetchDataService.fetchData();

    public ngOnInit(): any {
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

    public gamesData: any;

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

    private async searchForData(): Promise<void> {
        const data = await this.apiService.postRequest<any>(
            'https://api.bijanprogrammer.com/games/search',
            this.searchSetting
        );

        this.gamesData = await data?.games;
    }

    public updateSearch(newSetting: any): void {
        this.searchSetting = JSON.parse(JSON.stringify(newSetting));
    }

    public async doSearch(): Promise<void> {
        await this.searchForData();
    }
}
