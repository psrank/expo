import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import {SettingsComponent} from "./settings/settings.component";
import {ProfileComponent} from "./profile/profile.component";
import {HelpComponent} from "./help/help.component";


@Component({
    selector: 'expo-app',
    template: `<nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#"><img src="img/expo-e-logo-white.png" class="img-responsive" alt="Exponential-e"></a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a [routerLink]="['Home']">Dashboard</a></li>
                                <li><a [routerLink]="['Settings']">Settings</a></li>
                                <li><a [routerLink]="['Profile']">Profile</a></li>
                                <li><a [routerLink]="['Help']">Help</a></li>
                            </ul>
                            <form class="navbar-form navbar-right">
                                <input type="text" class="form-control" placeholder="Search...">
                            </form>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 main">
                            <router-outlet></router-outlet>           
                        </div>
                    </div>
                </div>` ,
    styleUrls:['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/settings', name: 'Settings', component: SettingsComponent },
    { path: '/profile', name: 'Profile', component: ProfileComponent },
    { path: '/help', name: 'Help', component: HelpComponent }
])
export class AppComponent {

}