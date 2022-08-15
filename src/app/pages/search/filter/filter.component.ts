import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import {Category} from '../../../components/header/categories/model/category';
import {Router} from '@angular/router';
import {FetchCategoriesDataService} from '../../../services/fetch-categories-data.service';
import {SearchPost} from '../../../models/search-post';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    @Input() public searchSetting!: SearchPost;
    @Input() public order: any = null;

    @Output() public newSearchSettingEventEmitter = new EventEmitter<any>();
    @Output() public newDoSearchEventEmitter = new EventEmitter<void>();

    public filters: Category[];

    public showFilter: boolean = false;

    public constructor(private filterData: FetchCategoriesDataService) {
        this.filters = this.filterData.fetchData();
    }

    public checkboxChange(e: any, kindOfFilter: string): void {
        if (e.target.checked) {
            // @ts-ignore
            this.searchSetting.filters[kindOfFilter].push(Number.parseInt(e.target.name));
        } else {
            // @ts-ignore
            this.searchSetting.filters[kindOfFilter] = this.searchSetting.filters[kindOfFilter].filter(
                (x: number) => x !== Number.parseInt(e.target.name)
            );
        }

        this.searchSetting.filters['minimumRating'] = 0;

        this.updateSearchSetting(this.searchSetting);
    }

    public updateSearchSetting(newSearchSetting: any): void {
        this.newSearchSettingEventEmitter.emit(newSearchSetting);
    }

    public doSearch(): void {
        this.newDoSearchEventEmitter.emit();
    }

    public resetFilters(): void {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        this.searchSetting = {
            searchPhrase: this.order?.params?.order,
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
                minimumRating: 70,
                maximumRating: 99,
            },
        };

        this.updateSearchSetting(this.searchSetting);

        this.doSearch();
    }

    public showFilters(): void {
        this.showFilter = !this.showFilter;
    }
}
