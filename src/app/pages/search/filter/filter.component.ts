import {Component} from '@angular/core';
import {SearchPost} from '../../../models/search-post';
import {FilterDataService} from './service/filter-data.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    public constructor(private filterData: FilterDataService) {}

    public filters: any = this.filterData.fetchFilterData();
}
