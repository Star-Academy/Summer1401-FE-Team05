import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {CarouselModule} from '../landing/carousel/carousel.module';
import {ProductsModule} from '../landing/products/products.module';

@NgModule({
    declarations: [GameComponent],
    imports: [CommonModule, CarouselModule, ProductsModule],
})
export class GameModule {}
