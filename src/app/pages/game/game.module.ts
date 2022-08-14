import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {CarouselModule} from '../landing/carousel/carousel.module';
import {ProductsModule} from '../landing/products/products.module';
import {GameBannerModule} from '../../pipes/game-banner/game-banner.module';
import {GameGenreModule} from "../../pipes/game-genre/game-genre.module";

@NgModule({
    declarations: [GameComponent],
    imports: [CommonModule, CarouselModule, ProductsModule, GameBannerModule, GameGenreModule],
})
export class GameModule {}
