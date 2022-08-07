import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardGridComponent} from './card-grid.component';
import {CardModule} from 'src/app/components/card/card.module';

@NgModule({
    declarations: [CardGridComponent],
    imports: [CommonModule, CardModule],
    exports: [CardGridComponent],
})
export class CardGridModule {}
