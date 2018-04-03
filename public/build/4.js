webpackJsonp([4],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingOrderPageModule", function() { return ParkingOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parking_order__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParkingOrderPageModule = (function () {
    function ParkingOrderPageModule() {
    }
    ParkingOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parking_order__["a" /* ParkingOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parking_order__["a" /* ParkingOrderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__parking_order__["a" /* ParkingOrderPage */]
            ]
        })
    ], ParkingOrderPageModule);
    return ParkingOrderPageModule;
}());

//# sourceMappingURL=parking-order.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingOrderPage; });
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
/// <reference path="../../services/jquery.d.ts"/> 
/// <reference path="../../services/amazeui.d.ts"/> 


/**
 * Generated class for the ParkingOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParkingOrderPage = (function () {
    function ParkingOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParkingOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParkingOrderPage');
    };
    ParkingOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parking-order',template:/*ion-inline-start:"D:\smart-parking\sparking-end\src\pages\parking-order\parking-order.html"*/'<!--\n  Generated template for the ParkingOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>parking-order</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <div class="body">\n    <table class="am-table am-table-striped am-table-bordered am-table-compact" id="example">\n      <thead>\n      <tr>\n        <th>Rendering engine</th>\n        <th>Browser</th>\n        <th>Platform(s)</th>\n        <th>Engine version</th>\n        <th>Grade</th>\n      </tr>\n      </thead>\n      <tfoot>\n      <tr>\n        <th>Rendering engine</th>\n        <th>Browser</th>\n        <th>Platform(s)</th>\n        <th>Engine version</th>\n        <th>Grade</th>\n      </tr>\n      </tfoot>\n      <tbody>\n      <tr class="odd gradeX">\n        <td>Trident</td>\n        <td>Internet\n          Explorer 4.0</td>\n        <td>Win 95+</td>\n        <td class="center"> 4</td>\n        <td class="center">X</td>\n      </tr>\n      <tr class="even gradeC">\n        <td>Trident</td>\n        <td>Internet\n          Explorer 5.0</td>\n        <td>Win 95+</td>\n        <td class="center">5</td>\n        <td class="center">C</td>\n      </tr>\n      <!-- more data -->\n      </tbody>\n    </table>\n    \n  </div>\n  \n  <footer></footer>\n</ion-content>\n'/*ion-inline-end:"D:\smart-parking\sparking-end\src\pages\parking-order\parking-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ParkingOrderPage);
    return ParkingOrderPage;
}());

//# sourceMappingURL=parking-order.js.map

/***/ })

});
//# sourceMappingURL=4.js.map