import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {CategoriesComponent} from './categories/categories.component';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [HeaderComponent, CategoriesComponent],
    imports: [CommonModule, RouterModule, NgxPopperjsModule, FormsModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
