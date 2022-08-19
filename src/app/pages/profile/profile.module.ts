import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {RowCardModule} from '../../components/row-card/row-card.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule, RowCardModule],
})
export class ProfileModule {}
