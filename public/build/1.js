webpackJsonp([1],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParklivePageModule", function() { return ParklivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parklive__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParklivePageModule = (function () {
    function ParklivePageModule() {
    }
    ParklivePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parklive__["a" /* ParklivePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parklive__["a" /* ParklivePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__parklive__["a" /* ParklivePage */]
            ]
        })
    ], ParklivePageModule);
    return ParklivePageModule;
}());

//# sourceMappingURL=parklive.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParklivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_service_socket_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(366);
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
 * Generated class for the ParklivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParklivePage = (function () {
    function ParklivePage(navCtrl, navParams, socket, httpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.httpService = httpService;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]({ enableLongStackTrace: false });
        this.socket.initialize();
        this.socket.socketService.subscribe(function (event) {
            console.log('message received from server... ', event);
            if (event.category === 'message') {
                _this.zone.run(function () {
                    console.log(event.message);
                });
            }
        }); //end of subscribe
    }
    ParklivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParklivePage');
    };
    ParklivePage.prototype.formatMessage = function (msg) {
        if (msg) {
            var chatMessage = {
                to: 'recipient',
                from: 'sender',
                message: msg,
            };
            return chatMessage;
        }
        return null;
    };
    ParklivePage.prototype.send = function (message) {
        var newMsg = this.formatMessage(message);
        if (newMsg) {
            // let newMsg = this.formatMessage(msg);
            this.socket.sendMessage(newMsg);
            console.log('emitting: ', newMsg);
        }
    };
    ParklivePage.prototype.sendHttp = function () {
        this.httpService.get('/test/getUserInfo').subscribe(function (res) {
            console.log(res);
        });
    };
    ParklivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parklive',template:/*ion-inline-start:"D:\smart-parking\sparking-end\src\pages\parklive\parklive.html"*/'<!--\n  Generated template for the ParklivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div class="body">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <div class="yblock">\n            <div class="am-tabs" data-am-tabs="{noSwipe: 1}" id="indoor-tabs">\n              <ul class="am-tabs-nav am-nav am-nav-tabs">\n                <li class="am-active"><a href="javascript: void(0)">入口一</a></li>\n                <li><a href="javascript: void(0)">入口二</a></li>\n                <li><a href="javascript: void(0)">入口三</a></li>\n              </ul>\n            \n              <div class="am-tabs-bd">\n                <div class="am-tab-panel am-active">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n                <div class="am-tab-panel">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n                <div class="am-tab-panel">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="yblock">\n            <div class="am-tabs" data-am-tabs="{noSwipe: 1}" id="outdoor-tabs">\n              <ul class="am-tabs-nav am-nav am-nav-tabs">\n                <li class="am-active"><a href="javascript: void(0)">出口一</a></li>\n                <li><a href="javascript: void(0)">出口二</a></li>\n                <li><a href="javascript: void(0)">出口三</a></li>\n              </ul>\n            \n              <div class="am-tabs-bd">\n                <div class="am-tab-panel am-active">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n                <div class="am-tab-panel">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n                <div class="am-tab-panel">\n                  <img src="../../assets/imgs/nocar.png">\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col col-9>\n              <select data-am-selected="{searchBox: 1}">\n                <option value="a">Apple</option>\n                <option value="b">Banana</option>\n                <option value="o">Orange</option>\n                <option value="m">Mango</option>\n                <option value="phone">iPhone</option>\n                <option value="im">iMac</option>\n                <option value="mbp">Macbook Pro</option>\n              </select>\n            </ion-col>\n            <ion-col col-3>\n              <div class="pull-left">\n                  <ion-badge item-end color="danger">剩余1</ion-badge>\n                  <ion-badge item-end color="secondary">共300</ion-badge>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-card class="detail-weight">\n              <ion-card-header>\n                车辆信息\n                <button class="pull-right am-btn am-btn-xs am-btn-primary">详情</button>\n                <!-- <button>刷新</button> -->\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col>\n                      <p>\n                        车型: \n                      </p>\n                      <p>\n                        入场时间: \n                      </p>\n                      <p>\n                        停车时长: \n                      </p>\n                  </ion-col>\n                  <ion-col>\n                      <p>\n                        入场口: \n                      </p>\n                      <p>\n                        出场时间: \n                      </p>\n                      <p>\n                        长租车证: \n                      </p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n\n            </ion-card>\n          </ion-row>\n          <ion-row>\n            <ion-card class="detail-weight">\n              <ion-card-header>\n                收费信息\n                <button class="pull-right am-btn am-btn-xs am-btn-primary">刷新</button>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col>\n                      <p>\n                        现金支付: \n                      </p>\n                      <p>\n                        优惠金额: \n                      </p>\n                  </ion-col>\n                  <ion-col>\n                      <p>\n                        电子支付: \n                      </p>\n                      <p>\n                        实际支付: \n                      </p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n\n            </ion-card>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <button ion-button full>收费放行</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <button ion-button color="light" (click)="send(\'you can go out\')">特殊放行</button>\n                <button ion-button (click)="send(\'hi\')">手动放行</button>\n                <button ion-button color="secondary" (click)="sendHttp()">入口拍照</button>\n                <button ion-button color="dark">出口拍照</button>\n                <button ion-button color="danger">禁止放行</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <div class="am-tabs" data-am-tabs="{noSwipe: 1}" id="orders-tabs">\n            <ul class="am-tabs-nav am-nav am-nav-tabs">\n              <li class="am-active"><a href="javascript: void(0)">入场订单</a></li>\n              <li><a href="javascript: void(0)">出场订单</a></li>\n            </ul>\n          \n            <div class="am-tabs-bd">\n              <div class="am-tab-panel am-active">\n                <table class="am-table am-table-striped am-table-bordered am-table-compact" id="example">\n                  <thead>\n                  <tr>\n                    <th>Rendering engine</th>\n                    <th>Browser</th>\n                    <th>Platform(s)</th>\n                    <th>Engine version</th>\n                    <th>Grade</th>\n                  </tr>\n                  </thead>\n                  <tfoot>\n                  <tr>\n                    <th>Rendering engine</th>\n                    <th>Browser</th>\n                    <th>Platform(s)</th>\n                    <th>Engine version</th>\n                    <th>Grade</th>\n                  </tr>\n                  </tfoot>\n                  <tbody>\n                  <tr class="odd gradeX">\n                    <td>Trident</td>\n                    <td>Internet\n                      Explorer 4.0</td>\n                    <td>Win 95+</td>\n                    <td class="center"> 4</td>\n                    <td class="center">X</td>\n                  </tr>\n                  <tr class="even gradeC">\n                    <td>Trident</td>\n                    <td>Internet\n                      Explorer 5.0</td>\n                    <td>Win 95+</td>\n                    <td class="center">5</td>\n                    <td class="center">C</td>\n                  </tr>\n                  <!-- more data -->\n                  </tbody>\n                </table>\n              </div>\n              <div class="am-tab-panel">\n                <table class="am-table am-table-striped am-table-bordered am-table-compact" id="example">\n                  <thead>\n                  <tr>\n                    <th>Rendering engine</th>\n                    <th>Browser</th>\n                    <th>Platform(s)</th>\n                    <th>Engine version</th>\n                    <th>Grade</th>\n                  </tr>\n                  </thead>\n                  <tfoot>\n                  <tr>\n                    <th>Rendering engine</th>\n                    <th>Browser</th>\n                    <th>Platform(s)</th>\n                    <th>Engine version</th>\n                    <th>Grade</th>\n                  </tr>\n                  </tfoot>\n                  <tbody>\n                  <tr class="odd gradeX">\n                    <td>Trident</td>\n                    <td>Internet\n                      Explorer 4.0</td>\n                    <td>Win 95+</td>\n                    <td class="center"> 4</td>\n                    <td class="center">X</td>\n                  </tr>\n                  <tr class="even gradeC">\n                    <td>Trident</td>\n                    <td>Internet\n                      Explorer 5.0</td>\n                    <td>Win 95+</td>\n                    <td class="center">5</td>\n                    <td class="center">C</td>\n                  </tr>\n                  <!-- more data -->\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </div>\n  <footer></footer>\n</ion-content>\n'/*ion-inline-end:"D:\smart-parking\sparking-end\src\pages\parklive\parklive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_socket_service_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */]])
    ], ParklivePage);
    return ParklivePage;
}());

//# sourceMappingURL=parklive.js.map

/***/ })

});
//# sourceMappingURL=1.js.map