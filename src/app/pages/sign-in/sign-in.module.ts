import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SignInComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [SignInComponent],
})
export class SignInModule {}
