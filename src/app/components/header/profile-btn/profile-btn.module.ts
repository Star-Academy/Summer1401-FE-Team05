import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileBtnComponent} from './profile-btn.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [ProfileBtnComponent],
    imports: [CommonModule, RouterModule],
    exports: [ProfileBtnComponent],
})
export class ProfileBtnModule {}
