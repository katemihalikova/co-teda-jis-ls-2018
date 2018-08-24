webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hra_hra__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.HraPage = __WEBPACK_IMPORTED_MODULE_2__hra_hra__["a" /* HraPage */];
        this.lepekzaskrtnuty = false;
        this.laktozazaskrtnuta = false;
    }
    HomePage.prototype.jdinadalsi = function () {
        console.log("Jdeme dal");
        var lepek;
        var laktoza;
        if (this.lepekzaskrtnuty == true) {
            lepek = "nemuze";
        }
        else {
            lepek = "muze";
        }
        if (this.laktozazaskrtnuta == true) {
            laktoza = "nemuze";
        }
        else {
            laktoza = "muze";
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hra_hra__["a" /* HraPage */], { lepek: lepek, laktoza: laktoza });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Co teda jíš?\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class="nesmim">\n      Nesmím:\n    </ion-item>\n    <ion-item>\n      <ion-label>Lepek</ion-label>\n      <ion-checkbox [(ngModel)]="lepekzaskrtnuty"></ion-checkbox>\n      <img src="assets/imgs/bez_lepku.png" item-end class="ikonka">\n    </ion-item>\n    <ion-item>\n      <ion-label>Laktóza</ion-label>\n      <ion-checkbox [(ngModel)]="laktozazaskrtnuta"></ion-checkbox>\n      <img src="assets/imgs/bez_laktozy.png" item-end class="ikonka">\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="jdinadalsi()">Hraj!</button>\n\n  <img src="assets/imgs/boy.png" class="deti">\n\n  <div class="poznamka">V aplikaci jsou použity “<a href="https://commons.wikimedia.org/wiki/Category:Twemoji_v2" target="_blank">Twemoji</a>” vytvořené <a href="https://about.twitter.com/" target="_blank">Twitterem</a> pod licencí <a href="https://creativecommons.org/licenses/by/4.0/deed.en" target="_blank">CC BY 4.0 International</a>.</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var lokace = __webpack_require__(269);
var HraPage = /** @class */ (function () {
    function HraPage(navParams) {
        this.navParams = navParams;
        this.lokaceHry = lokace["Fastfood"];
        this.jidla = shuffle(this.lokaceHry.jidla);
        this.presunutajidla = [];
        this.lepek = this.navParams.get("lepek");
        this.laktoza = this.navParams.get("laktoza");
        this.gameoverZobrazeno = false;
        this.vyhraZobrazeno = false;
        console.log(this.jidla);
    }
    HraPage.prototype.kliknutoNaJidlo = function (jidlo) {
        var _this = this;
        console.log(jidlo);
        if ((this.lepek == "nemuze" && jidlo.lepek == "obsahuje") || (this.laktoza == "nemuze" && jidlo.laktoza == "obsahuje")) {
            console.log("Game Over");
            this.gameoverZobrazeno = true;
        }
        else {
            console.log("OK");
            this.jidla = this.jidla.filter(function (j) { return j != jidlo; });
            this.presunutajidla.push(jidlo);
            if (this.jidla.every(function (j) { return (_this.lepek == "nemuze" && j.lepek == "obsahuje") || (_this.laktoza == "nemuze" && j.laktoza == "obsahuje"); })) {
                console.log("vyhravas");
                this.vyhraZobrazeno = true;
            }
        }
    };
    HraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-hra",template:/*ion-inline-start:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\pages\hra\hra.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Co sníš?</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="top">\n    <img src="assets/imgs/{{jidlo.obrazek}}" alt="{{jidlo.nazev}}" *ngFor="let jidlo of jidla" (click)="kliknutoNaJidlo(jidlo)">\n  </div>\n\n  <div class="bottom">\n    <img src="assets/imgs/talir.png" class="pozadi">\n    <div class="talir">\n      <img src="assets/imgs/{{jidlo.obrazek}}" alt="{{jidlo.nazev}}" *ngFor="let jidlo of presunutajidla">\n    </div>\n  </div>\n\n  <div class="gameover" [ngClass]="{zobrazeno: gameoverZobrazeno == true}">\n    <img src="assets/imgs/gameover.png">\n  </div>\n\n  <div class="vyhra" [ngClass]="{zobrazeno: vyhraZobrazeno == true}">\n    <img src="assets/imgs/vyhra.png">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\pages\hra\hra.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], HraPage);
    return HraPage;
}());

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//# sourceMappingURL=hra.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hra_hra__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_hra_hra__["a" /* HraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_hra_hra__["a" /* HraPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\katem\src\katemihalikova\co-jis-ls-2018\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = {"Fastfood":{"pozadi":"fastfood.jpg","jidla":[{"nazev":"Pizza","obrazek":"Twemoji2_1f355.svg","laktoza":"obsahuje","lepek":"obsahuje"},{"nazev":"Hranolky","obrazek":"Twemoji2_1f35f.svg","lepek":"neobsahuje","laktoza":"neobsahuje"},{"nazev":"Salát bez zálivky","obrazek":"Twemoji2_1f957.svg","lepek":"neobsahuje","laktoza":"neobsahuje"},{"nazev":"Nugetky","obrazek":"Twemoji2_1f357.svg","lepek":"obsahuje","laktoza":"neobsahuje"},{"nazev":"Hamburger","obrazek":"Twemoji2_1f354.svg","lepek":"obsahuje","laktoza":"obsahuje"},{"nazev":"Hot Dog","obrazek":"Twemoji2_1f32d.svg","lepek":"obsahuje","laktoza":"neobsahuje"},{"nazev":"Tortilla","obrazek":"Twemoji2_1f32f.svg","lepek":"obsahuje","laktoza":"obsahuje"},{"nazev":"Zmrzlina","obrazek":"Twemoji2_1f368.svg","lepek":"neobsahuje","laktoza":"obsahuje"},{"nazev":"Sendvič","obrazek":"Twemoji2_1f96a.svg","lepek":"obsahuje","laktoza":"obsahuje"}]}}

/***/ })

},[195]);
//# sourceMappingURL=main.js.map