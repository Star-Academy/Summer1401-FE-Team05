import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RowCardComponent} from './row-card.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [RowCardComponent],
    exports: [RowCardComponent],
    imports: [CommonModule, RouterModule],
})
export class RowCardModule {}
