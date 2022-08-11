import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FilterDataService} from './service/filter-data.service';
import {Category} from '../../../components/header/categories/model/category';
import {Router} from '@angular/router';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() searchSetting: any = '';
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() order: any = null;

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Output() newSearchSettingEventEmitter = new EventEmitter<any>();
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Output() newDoSearchEventEmitter = new EventEmitter<void>();

    public constructor(private filterData: FilterDataService, private router: Router) {}

    public filters: Category[] = this.filterData.fetchFilterData();

    public checkboxChange(e: any, kindOfFilter: string): void {
        if (e.target.checked) this.searchSetting.filters[kindOfFilter].push(Number.parseInt(e.target.name));
        else
            this.searchSetting.filters[kindOfFilter] = this.searchSetting.filters[kindOfFilter].filter(
                (x: number) => x !== Number.parseInt(e.target.name)
            );

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
}
