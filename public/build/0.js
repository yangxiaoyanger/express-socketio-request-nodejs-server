webpackJsonp([0],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(737);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


var TabsPage = (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = 'ParklivePage';
        this.tab2Root = 'ParkingPage';
        this.tab1Url = 'parklive';
        this.tab2Url = 'parking';
        this.tab1Title = '实时停车';
        this.tab2Title = '停车场管理';
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        // this.tabRef.select(this.selectTabIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\smart-parking\sparking-end\src\pages\tabs\tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>tabs</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-tabs  #myTabs mode="wp" tabsPlacement="top">\n  <ion-row class="nav">\n    <!-- <ion-col col-auto align-self-center padding-left>\n      <img src="assets/imgs/logo-lzh.png" class="logo">\n    </ion-col> -->\n    <ion-col col-6 align-self-center padding-left>\n      <ion-row class="sub-title">\n        兰州市智慧停车平台\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 align-self-center padding-left>\n      <ion-row class="pull-right">\n        <div class="am-topbar-right">\n          <div class="am-dropdown" data-am-dropdown="{boundary: \'.am-topbar\'}">\n            <button class="am-btn am-btn-primary am-topbar-btn am-btn-bg am-dropdown-toggle" data-am-dropdown-toggle>管理员 <span class="am-icon-caret-down"></span></button>\n            <ul class="am-dropdown-content">\n              <li><a href="#"><span class="am-icon-user-md  am-icon-fw"></span>个人设置</a></li>\n              <li><a href="#"><span class="am-icon-sign-out  am-icon-fw"></span>退出</a></li>\n            </ul>\n          </div>\n        </div>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-tab [root]="tab1Root" [tabUrlPath]=\'tab1Url\' [tabTitle]="tab1Title"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabUrlPath]=\'tab2Url\' [tabTitle]="tab2Title"></ion-tab>\n </ion-tabs>\n'/*ion-inline-end:"D:\smart-parking\sparking-end\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.js.map