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

    public platformCheckboxChange(e: any): void {
        if (e.target.checked) {
            switch (Number.parseInt(e.target.name)) {
                case 1:
                    this.searchSetting.filters['platforms'].push(3, 6, 14);
                    break;
                case 2:
                    this.searchSetting.filters['platforms'].push(7, 8, 9, 38, 46, 48, 131, 165, 167, 390);
                    break;
                case 3:
                    this.searchSetting.filters['platforms'].push(11, 12, 49, 169);
                    break;
                case 4:
                    this.searchSetting.filters['platforms'].push(34, 39);
                    break;
            }
        } else {
            switch (Number.parseInt(e.target.name)) {
                case 1:
                    this.searchSetting.filters['platforms'] = this.searchSetting.filters['platforms'].filter(
                        (x: number) => !(x === 3 || x === 6 || x === 14)
                    );
                    break;
                case 2:
                    this.searchSetting.filters['platforms'] = this.searchSetting.filters['platforms'].filter(
                        (x: number) =>
                            !(
                                x === 7 ||
                                x === 8 ||
                                x === 9 ||
                                x === 38 ||
                                x === 46 ||
                                x === 48 ||
                                x === 131 ||
                                x === 165 ||
                                x === 167 ||
                                x === 390
                            )
                    );
                    break;
                case 3:
                    this.searchSetting.filters['platforms'].push(11, 12, 49, 169);
                    this.searchSetting.filters['platforms'] = this.searchSetting.filters['platforms'].filter(
                        (x: number) => !(x === 11 || x === 12 || x === 49 || x === 169)
                    );
                    break;
                case 4:
                    this.searchSetting.filters['platforms'] = this.searchSetting.filters['platforms'].filter(
                        (x: number) => !(x === 34 || x === 39)
                    );
                    break;
            }
        }
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
