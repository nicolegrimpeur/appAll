import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxMatomoTrackerModule} from '@ngx-matomo/tracker';
import {NgxMatomoRouterModule} from '@ngx-matomo/router';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, NgxMatomoTrackerModule.forRoot({
            trackerUrl: 'https://nicob.ovh/matomo/',
            siteId: '2'
        }), NgxMatomoRouterModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
