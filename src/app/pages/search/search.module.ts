import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {CardGridModule} from './card-grid/card-grid.module';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, CardGridModule],
    exports: [SearchComponent],
})
export class SearchModule {}
