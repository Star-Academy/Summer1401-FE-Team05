import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameBannerPipe} from './game-banner.pipe';

@NgModule({
    declarations: [GameBannerPipe],
    imports: [CommonModule],
    exports: [GameBannerPipe],
})
export class GameBannerModule {}
