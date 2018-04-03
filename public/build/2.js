webpackJsonp([2],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingPageModule", function() { return ParkingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parking__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParkingPageModule = (function () {
    function ParkingPageModule() {
    }
    ParkingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parking__["a" /* ParkingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parking__["a" /* ParkingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__parking__["a" /* ParkingPage */]
            ]
        })
    ], ParkingPageModule);
    return ParkingPageModule;
}());

//# sourceMappingURL=parking.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ParkingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParkingPage = (function () {
    function ParkingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'ParkingTenantPage';
        this.tab2Root = 'ParkingOrderPage';
        this.tab1Url = 'parkingTenant';
        this.tab2Url = 'parkingOrder';
        this.tab1Title = '经营单位管理';
        this.tab2Title = '停车场订单管理';
    }
    ParkingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParkingPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('parkingTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Tabs */])
    ], ParkingPage.prototype, "tabRef", void 0);
    ParkingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parking',template:/*ion-inline-start:"D:\smart-parking\sparking-end\src\pages\parking\parking.html"*/'<!--\n  Generated template for the ParkingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>parking</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content>\n  <ion-tabs #parkingTabs mode="wp" tabsPlacement="top" class="am-topbar body body-responsive" tabsLayout=\'icon-start\' style="height:604px;">\n    <ion-tab [root]="tab1Root" [tabUrlPath]=\'tab1Url\' [tabTitle]="tab1Title"></ion-tab>\n    <ion-tab [root]="tab2Root" [tabUrlPath]=\'tab2Url\' [tabTitle]="tab2Title"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"D:\smart-parking\sparking-end\src\pages\parking\parking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ParkingPage);
    return ParkingPage;
}());

//# sourceMappingURL=parking.js.map

/***/ })

});
//# sourceMappingURL=2.js.map