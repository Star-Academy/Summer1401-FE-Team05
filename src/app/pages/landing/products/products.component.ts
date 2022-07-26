import {Component} from '@angular/core';

import {cards} from './sample-data';
import {Product} from './models/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    public cards: Product[] = cards;
}
