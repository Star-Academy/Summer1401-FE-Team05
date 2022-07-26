import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselModule} from './carousel/carousel.module';
import {ProductsModule} from './products/products.module';

import {LandingComponent} from './landing.component';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, CarouselModule, ProductsModule],
    exports: [LandingComponent],
})
export class LandingModule {}
