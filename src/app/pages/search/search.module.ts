import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {CardGridModule} from './card-grid/card-grid.module';
import {FilterModule} from "./filter/filter.module";

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, CardGridModule, FilterModule],
    exports: [SearchComponent],
})
export class SearchModule {}
