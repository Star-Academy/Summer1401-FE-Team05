import {Component} from '@angular/core';
import {SearchPost} from '../../../models/search-post';
import {FilterDataService} from './service/filter-data.service';
import {Category} from '../../../components/header/categories/model/category';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    public constructor(private filterData: FilterDataService) {}

    public filters: Category[] = this.filterData.fetchFilterData();
}
