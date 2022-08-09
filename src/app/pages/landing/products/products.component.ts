import {Component, ElementRef, ViewChild} from '@angular/core';

import {cards} from './sample-data';
import {Product} from './models/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    @ViewChild('scrollCards') private scrollCards!: ElementRef<HTMLElement>;

    public next(): void {
        this.scrollCards.nativeElement.scrollBy(-250, 0);
    }
    public prev(): void {
        this.scrollCards.nativeElement.scrollBy(250, 0);
    }
}
