import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxComponent} from './search-box.component';
import {FormsModule} from '@angular/forms';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SearchBoxComponent],
    imports: [CommonModule, FormsModule, NgxPopperjsModule, RouterModule],
    exports: [SearchBoxComponent],
})
export class SearchBoxModule {}
