import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {LandingModule} from './pages/landing/landing.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {SignInModule} from './pages/sign-in/sign-in.module';
import {ProfileModule} from './pages/profile/profile.module';
import {SignUpModule} from './pages/sign-up/sign-up.module';
import {SearchModule} from './pages/search/search.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        NotFoundModule,
        LandingModule,
        HeaderModule,
        FooterModule,
        SignInModule,
        ProfileModule,
        SignUpModule,
        SearchModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
