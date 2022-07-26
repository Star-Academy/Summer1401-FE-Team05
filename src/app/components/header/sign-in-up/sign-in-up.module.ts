import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInUpComponent} from './sign-in-up.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SignInUpComponent],
    imports: [CommonModule, RouterModule],
    exports: [SignInUpComponent],
})
export class SignInUpModule {}
