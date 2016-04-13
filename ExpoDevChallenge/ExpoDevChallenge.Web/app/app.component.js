System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/home.component', "./settings/settings.component", "./profile/profile.component", "./help/help.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, home_component_1, settings_component_1, profile_component_1, help_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (help_component_1_1) {
                help_component_1 = help_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'expo-app',
                        template: "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n                    <div class=\"container-fluid\">\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                                <span class=\"sr-only\">Toggle navigation</span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                            </button>\n                            <a class=\"navbar-brand\" href=\"#\"><img src=\"img/expo-e-logo-white.png\" class=\"img-responsive\" alt=\"Exponential-e\"></a>\n                        </div>\n                        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                            <ul class=\"nav navbar-nav navbar-right\">\n                                <li><a [routerLink]=\"['Home']\">Dashboard</a></li>\n                                <li><a [routerLink]=\"['Settings']\">Settings</a></li>\n                                <li><a [routerLink]=\"['Profile']\">Profile</a></li>\n                                <li><a [routerLink]=\"['Help']\">Help</a></li>\n                            </ul>\n                            <form class=\"navbar-form navbar-right\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            </form>\n                        </div>\n                    </div>\n                </nav>\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-12 main\">\n                            <router-outlet></router-outlet>           \n                        </div>\n                    </div>\n                </div>",
                        styleUrls: ['./app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/settings', name: 'Settings', component: settings_component_1.SettingsComponent },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/help', name: 'Help', component: help_component_1.HelpComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map