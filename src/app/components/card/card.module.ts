import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [CardComponent],
})
export class CardModule {}
