import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import { CarouselModule } from './carousel/carousel.module';
import { ProductsModule } from './products/products.module';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, CarouselModule, ProductsModule],
})
export class LandingModule {}
