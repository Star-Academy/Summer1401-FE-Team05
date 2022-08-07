import {Component} from '@angular/core';

import {CategoryFetchDataService} from './services/category-fetch-data.service';

import {NgxPopperjsPlacements, NgxPopperjsTriggers} from 'ngx-popperjs';
import {Category} from './model/category';
import {Modifier} from '@popperjs/core';

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

    public constructor(private categoryDataFetch: CategoryFetchDataService) {
        this.categories = categoryDataFetch.fetchData();
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
}
