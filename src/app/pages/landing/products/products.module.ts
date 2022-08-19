import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'src/app/components/card/card.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProductsComponent],
    imports: [CommonModule, RouterModule, CardModule, FormsModule],
    exports: [ProductsComponent],
})
export class ProductsModule {}
