import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameGenrePipe} from './game-genre.pipe';

@NgModule({
    declarations: [GameGenrePipe],
    imports: [CommonModule],
    exports: [GameGenrePipe],
})
export class GameGenreModule {}
