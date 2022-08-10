import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    private order: any = null;

    public constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function (): boolean {
            return false;
        };
    }

    public ngOnInit(): any {
        this.activatedRoute.queryParamMap.subscribe((params) => {
            this.order = {...params.keys, ...params};
        });

        this.searchForData(this.order.params.order).then();
    }

    public gamesData: any;

    private async searchForData(_order: string | null): Promise<void> {
        const searchSetting = {
            searchPhrase: _order ? _order : '',
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

        const data = await this.apiService.postRequest<any>(
            'https://api.bijanprogrammer.com/games/search',
            searchSetting
        );

        this.gamesData = await data.games;

        console.log(this.gamesData);
    }
}
