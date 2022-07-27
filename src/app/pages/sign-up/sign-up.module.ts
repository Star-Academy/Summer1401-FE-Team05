import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './sign-up.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SignUpComponent],
    imports: [CommonModule, FormsModule, RouterModule],
})
export class SignUpModule {}
