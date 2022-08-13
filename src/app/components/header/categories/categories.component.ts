import {Component, EventEmitter, Output} from '@angular/core';

import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';
import {Category} from './model/category';
import {Modifier} from '@popperjs/core';
import {FetchCategoriesDataService} from '../../../services/fetch-categories-data.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;
    public NgxPopperjsTriggers = NgxPopperjsTriggers;

    public categories: Category[];
    public activeCategory!: Category;

    public constructor(private fetchCategoriesDataService: FetchCategoriesDataService) {
        this.categories = fetchCategoriesDataService.fetchData();
        this.activeCategory = this.categories[0];
    }

    public popperModifiers: Partial<Modifier<any, any>>[] = [
        {
            name: 'offset',
            options: {
                offset: [0, 0],
            },
        },
    ];

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Output() newCloseMobileNavEventEmitter = new EventEmitter<void>();

    public categoryOpen: boolean = false;

    public categoryButtonHandler(): void {
        this.categoryOpen = !this.categoryOpen;
    }

    public subCategoryButtonHandler(e: any): void {
        // @ts-ignore
        const btn = e.target.closest('.drop-down-sub-button');
        // @ts-ignore
        const link = e.target.closest('.drop-down-content-links');

        if (!!btn && btn?.classList.contains('open')) {
            btn.classList.remove('open');
        } else if (!!btn && !btn?.classList.contains('open')) {
            btn.classList.add('open');
        } else if (!!link) {
            this.newCloseMobileNavEventEmitter.emit();
        }
    }
}
