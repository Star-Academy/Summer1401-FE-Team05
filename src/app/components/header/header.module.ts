import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxModule} from './search-box/search-box.module';
import { ProfileBtnModule } from './profile-btn/profile-btn.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, SearchBoxModule, ProfileBtnModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
