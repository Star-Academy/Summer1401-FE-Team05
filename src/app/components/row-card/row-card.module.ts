import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowCardComponent } from './row-card.component';



@NgModule({
    declarations: [
        RowCardComponent
    ],
    exports: [
        RowCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RowCardModule { }
