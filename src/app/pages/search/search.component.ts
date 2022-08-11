import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public order: any = null;

    public constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    public ngOnInit(): any {
        this.activatedRoute.queryParamMap.subscribe((params) => {
            this.order = {...params.keys, ...params};
        });

        console.log(this.order.params.order);

        this.searchForData().then();
    }

    public gamesData: any;

    public searchSetting: object = {
        searchPhrase: this.order?.params?.order ? this.order.params.order : '',
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

        this.gamesData = await data.games;

        console.log(this.gamesData);
    }

    public updateSearch(newSetting: any): void {
        this.searchSetting = JSON.parse(JSON.stringify(newSetting));
    }

    public async doSearch(): Promise<void> {
        await this.searchForData();
    }
}
