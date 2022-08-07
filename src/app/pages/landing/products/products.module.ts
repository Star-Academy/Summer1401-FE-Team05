import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'src/app/components/card/card.module';

@NgModule({
    declarations: [ProductsComponent],
    imports: [CommonModule, RouterModule, CardModule],
    exports: [ProductsComponent],
})
export class ProductsModule {}
