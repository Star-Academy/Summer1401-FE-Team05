import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from './pages/landing/landing.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ProfileComponent} from './pages/profile/profile.component';

import {AuthGuard} from './guards/auth.guard';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingComponent},
    {path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard]},
    {path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
