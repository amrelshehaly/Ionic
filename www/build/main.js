webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subvegetable_subvegetable__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subfruit_subfruit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submeat_submeat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subseafood_subseafood__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.getUsers();
        console.log(this.i);
    }
    DashboardPage.prototype.getUsers = function () {
        var _this = this;
        this.api.getUsers()
            .then(function (data) {
            _this.users = data;
            _this.continue = [_this.users[2], _this.users[3]];
            console.log(_this.users);
            console.log(_this.users[2]);
            console.log(_this.users[3]);
        });
    };
    DashboardPage.prototype.onClick = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (user.name) {
                    case "Vegetables": {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subvegetable_subvegetable__["a" /* SubvegetablePage */]);
                        break;
                    }
                    case "Fruits": {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__subfruit_subfruit__["a" /* SubfruitPage */]);
                        break;
                    }
                    case "Meats": {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__submeat_submeat__["a" /* SubmeatPage */]);
                        break;
                    }
                    case "Seafood": {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__subseafood_subseafood__["a" /* SubseafoodPage */]);
                        break;
                    }
                    default: {
                        //statements; 
                        break;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.Goback = function () {
        this.navCtrl.pop();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-buttons start>\n            <button ion-button icon-only color="royal" (click)="Goback()">\n              <ion-icon name="arrow-round-back" ></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Dashboard</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class="bg-style">\n    <!-- <ion-card *ngFor="let user of users" (click)="onClick(user)"  style="background-color: white;">\n  \n        <ion-card-header>\n          <ion-card-title>{{user.name}}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <img src="{{user.category_img}}" />\n        </ion-card-content>\n    </ion-card> -->\n\n    <ion-slides style="height: 50%; margin-top: -20px;width: 100%">\n        <ion-slide>\n            <img src="/assets/icon/burger.jpg" />        \n          </ion-slide>\n        <ion-slide>\n            <img src="/assets/icon/food1.jpg" />         \n          </ion-slide>\n        <ion-slide>\n            <img src="/assets/icon/jelly.jpg" /> \n          </ion-slide>\n      </ion-slides>\n\n      <ion-grid>\n          <ion-row >\n            <ion-col *ngFor="let user of users ;let i = index"  (click)="onClick(user)"  col-6 >\n                <ion-card *ngIf="i < 2">\n                    <!-- <ion-card-header>\n                      <ion-card-title>{{user.name}}</ion-card-title>\n                    </ion-card-header> -->\n                  \n                    <!-- <ion-card-content>\n                      <img src="{{user.product_img}}" />\n                    </ion-card-content> -->\n                    <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                    <img class="image" src="{{user.category_img}}"  />\n                </ion-card>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <img src="/assets/icon/spices-banner-2000x355.jpg" style="height: 100px; width: 100%;" />\n          </ion-row>\n          <ion-row >\n              <ion-col *ngFor="let user of continue "  (click)="onClick(user)"  col-6 >\n                  <ion-card >\n                      <!-- <ion-card-header>\n                        <ion-card-title>{{user.name}}</ion-card-title>\n                      </ion-card-header> -->\n                    \n                      <!-- <ion-card-content>\n                        <img src="{{user.product_img}}" />\n                      </ion-card-content> -->\n                      <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                      <img class="image" src="{{user.category_img}}"  />\n                  </ion-card>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubvegetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(34);
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
 * Generated class for the SubvegetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubvegetablePage = /** @class */ (function () {
    function SubvegetablePage(api, navCtrl, model) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.model = model;
        this.getVeg();
    }
    SubvegetablePage.prototype.getVeg = function () {
        var _this = this;
        this.api.getUsers()
            .then(function (data) {
            _this.results = data[0].products;
            console.log(_this.results);
        });
    };
    SubvegetablePage.prototype.onClick = function () {
        this.navCtrl.pop();
    };
    SubvegetablePage.prototype.showingProduct = function (user) {
        var profileModal = this.model.create(__WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* ModelPage */], { product: user });
        profileModal.present();
    };
    SubvegetablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubvegetablePage');
    };
    SubvegetablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subvegetable',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subvegetable/subvegetable.html"*/'<!-- <ion-header>\n  <ion-toolbar>\n    <ion-icon name="arrow-round-back" style="zoom:2.5;" (click)="onClick()"></ion-icon>\n    <ion-title>subvegetable list</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header no-border>\n    <ion-toolbar transparent>\n        <ion-buttons start>\n            <button ion-button icon-only color="royal" (click)="onClick()">\n              <ion-icon name="arrow-round-back" ></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>subvegetable list</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <!-- <ion-card *ngFor="let user of results" style="background-color: white;">\n  \n        <ion-card-header>\n          <ion-card-title>{{user.name}}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <img src="{{user.product_img}}" />\n        </ion-card-content>\n        <button ion-button (click)="showingProduct(user)" >SHow Details</button>\n    </ion-card> -->\n\n    <img src="/assets/icon/Fruits-vs-Vegetables.jpg" />\n\n\n    <ion-grid>\n        <ion-row >\n          <ion-col *ngFor="let user of results" col-6 style="background-color: white;">\n              <ion-card>\n  \n                  <!-- <ion-card-header>\n                    <ion-card-title>{{user.name}}</ion-card-title>\n                  </ion-card-header> -->\n                \n                  <!-- <ion-card-content>\n                    <img src="{{user.product_img}}" />\n                  </ion-card-content> -->\n                  <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                  <img (click)="showingProduct(user)"  src="{{user.product_img}}" />\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n\n<ion-footer style="background: #f53d3d">\n<ion-toolbar color="danger" >\n    <ion-buttons >\n        <button ion-button style="margin-left: 25%;color: white">\n          sort\n        </button>\n        <button ion-button style="margin-left: 25%;color: white">\n            Filter\n        </button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subvegetable/subvegetable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SubvegetablePage);
    return SubvegetablePage;
}());

//# sourceMappingURL=subvegetable.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubfruitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(34);
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
 * Generated class for the SubfruitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubfruitPage = /** @class */ (function () {
    function SubfruitPage(api, navCtrl, model) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.model = model;
        this.getFruits();
    }
    SubfruitPage.prototype.getFruits = function () {
        var _this = this;
        this.api.getUsers()
            .then(function (data) {
            _this.fruits = data[1].products;
            console.log(_this.fruits);
        });
    };
    SubfruitPage.prototype.showingProduct = function (user) {
        var profileModal = this.model.create(__WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* ModelPage */], { product: user });
        profileModal.present();
    };
    SubfruitPage.prototype.onClick = function () {
        this.navCtrl.pop();
    };
    SubfruitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubfruitPage');
    };
    SubfruitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subfruit',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subfruit/subfruit.html"*/'<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>subfruit</ion-title>\n    <ion-icon name="arrow-round-back" style="zoom:2.5;" (click)="onClick()"></ion-icon>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons start>\n            <button ion-button icon-only color="royal" (click)="onClick()">\n              <ion-icon name="arrow-round-back" ></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>subvegetable list</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <!-- <ion-card *ngFor="let user of fruits" style="background-color: white;">\n  \n        <ion-card-header>\n          <ion-card-title>{{user.name}}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <img src="{{user.product_img}}" />\n        </ion-card-content>\n        <button ion-button (click)="showingProduct(user)" >SHow Details</button>\n    </ion-card> -->\n\n    <img src="/assets/icon/High-protein-fruits-e1540893420454.jpg" />\n\n\n    <ion-grid>\n        <ion-row >\n          <ion-col *ngFor="let user of fruits" col-6 style="background-color: white;">\n              <ion-card>\n  \n                  <!-- <ion-card-header>\n                    <ion-card-title>{{user.name}}</ion-card-title>\n                  </ion-card-header> -->\n                \n                  <!-- <ion-card-content>\n                    <img src="{{user.product_img}}" />\n                  </ion-card-content> -->\n                  <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                  <img (click)="showingProduct(user)"  src="{{user.product_img}}" />\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n\n<ion-footer style="background: #f53d3d">\n    <ion-toolbar color="danger" >\n        <ion-buttons >\n            <button ion-button style="margin-left: 25%;color: white">\n              sort\n            </button>\n            <button ion-button style="margin-left: 25%;color: white">\n                Filter\n            </button>\n          </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subfruit/subfruit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SubfruitPage);
    return SubfruitPage;
}());

//# sourceMappingURL=subfruit.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmeatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(34);
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
 * Generated class for the SubmeatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubmeatPage = /** @class */ (function () {
    function SubmeatPage(api, navCtrl, model) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.model = model;
        this.getmeat();
    }
    SubmeatPage.prototype.getmeat = function () {
        var _this = this;
        this.api.getUsers()
            .then(function (data) {
            _this.meat = data[2].products;
            console.log(_this.meat);
        });
    };
    SubmeatPage.prototype.showingProduct = function (user) {
        var profileModal = this.model.create(__WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* ModelPage */], { product: user });
        profileModal.present();
    };
    SubmeatPage.prototype.onClick = function () {
        this.navCtrl.pop();
    };
    SubmeatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmeatPage');
    };
    SubmeatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-submeat',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/submeat/submeat.html"*/'<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title style="align-content: center">submeat</ion-title>\n      <ion-icon name="arrow-round-back" style="zoom:2.5;" (click)="onClick()"></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n   -->\n\n   <ion-header>\n      <ion-toolbar>\n          <ion-buttons start>\n              <button ion-button icon-only color="royal" (click)="onClick()">\n                <ion-icon name="arrow-round-back" ></ion-icon>\n              </button>\n            </ion-buttons>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>subvegetable list</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n  <ion-content>\n  \n      <!-- <ion-card *ngFor="let user of meat" style="background-color: white;">\n    \n          <ion-card-header>\n            <ion-card-title>{{user.name}}</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            <img src="{{user.product_img}}" />\n          </ion-card-content>\n          <button ion-button (click)="showingProduct(user)" >SHow Details</button>\n      </ion-card> -->\n\n      <img src="/assets/icon/butcher_choice_assorted_meats.jpg" />\n\n\n\n      <ion-grid>\n          <ion-row >\n            <ion-col *ngFor="let user of meat" col-6 style="background-color: white;">\n                <ion-card>\n    \n                    <!-- <ion-card-header>\n                      <ion-card-title>{{user.name}}</ion-card-title>\n                    </ion-card-header> -->\n                  \n                    <!-- <ion-card-content> \n                    <img (click)="showingProduct(user)"  src="{{user.product_img}}" />\n                    </ion-card-content> -->\n                    <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                    <img (click)="showingProduct(user)"  src="{{user.product_img}}" />\n                </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n  </ion-content>\n\n  <ion-footer style="background: #f53d3d">\n      <ion-toolbar color="danger" >\n          <ion-buttons >\n              <button ion-button style="margin-left: 25%;color: white">\n                sort\n              </button>\n              <button ion-button style="margin-left: 25%;color: white">\n                  Filter\n              </button>\n            </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/submeat/submeat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SubmeatPage);
    return SubmeatPage;
}());

//# sourceMappingURL=submeat.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubseafoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(34);
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
 * Generated class for the SubseafoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubseafoodPage = /** @class */ (function () {
    function SubseafoodPage(api, navCtrl, model) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.model = model;
        this.getseafood();
    }
    SubseafoodPage.prototype.getseafood = function () {
        var _this = this;
        this.api.getUsers()
            .then(function (data) {
            _this.seafood = data[3].products;
            console.log(_this.seafood);
        });
    };
    SubseafoodPage.prototype.onClick = function () {
        this.navCtrl.pop();
    };
    SubseafoodPage.prototype.showingProduct = function (user) {
        var profileModal = this.model.create(__WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* ModelPage */], { product: user });
        profileModal.present();
    };
    SubseafoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubseafoodPage');
    };
    SubseafoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subseafood',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subseafood/subseafood.html"*/'<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>subseafood</ion-title>\n      <ion-icon name="arrow-round-back" style="zoom:2.5;" (click)="onClick()"></ion-icon>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-header>\n      <ion-toolbar>\n          <ion-buttons start>\n              <button ion-button icon-only color="royal" (click)="onClick()">\n                <ion-icon name="arrow-round-back" ></ion-icon>\n              </button>\n            </ion-buttons>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>subvegetable list</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n  \n  <ion-content>\n  \n      <!-- <ion-card *ngFor="let user of seafood" style="background-color: white;">\n    \n          <ion-card-header>\n            <ion-card-title>{{user.name}}</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            <img src="{{user.product_img}}" />\n          </ion-card-content>\n          <button ion-button (click)="showingProduct(user)" >SHow Details</button>\n        </ion-card> -->\n\n        <img src="/assets/icon/grilled-seafood-platter-23435-1.jpg" />\n\n\n        <ion-grid>\n            <ion-row >\n              <ion-col *ngFor="let user of seafood" col-6 style="background-color: white;">\n                  <ion-card>\n      \n                      <!-- <ion-card-header>\n                        <ion-card-title>{{user.name}}</ion-card-title>\n                      </ion-card-header> -->\n                    \n                      <!-- <ion-card-content>\n                        <img src="{{user.product_img}}" />\n                      </ion-card-content> -->\n                      <!-- <button ion-button (click)="showingProduct(user)" >SHow Details</button> -->\n                      <img (click)="showingProduct(user)"  src="{{user.product_img}}" />\n                  </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n  \n  </ion-content>\n\n  <ion-footer style="background: #f53d3d">\n      <ion-toolbar color="danger" >\n          <ion-buttons >\n              <button ion-button style="margin-left: 25%;color: white">\n                sort\n              </button>\n              <button ion-button style="margin-left: 25%;color: white">\n                  Filter\n              </button>\n            </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/subseafood/subseafood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SubseafoodPage);
    return SubseafoodPage;
}());

//# sourceMappingURL=subseafood.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		281,
		5
	],
	"../pages/model/model.module": [
		282,
		4
	],
	"../pages/subfruit/subfruit.module": [
		283,
		3
	],
	"../pages/submeat/submeat.module": [
		284,
		2
	],
	"../pages/subseafood/subseafood.module": [
		285,
		1
	],
	"../pages/subvegetable/subvegetable.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(101);
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
    }
    HomePage.prototype.Go = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/home/home.html"*/'<div *ngIf="showSplash">\n<div class="spinner"></div>\n</div>\n\n\n\n<ion-slides pager>\n\n  <ion-slide style="background-color:crimson">\n    <ion-card style="background-color: white;height: -webkit-fill-available;">\n      <ion-card-header>\n        Header\n      </ion-card-header>\n      <ion-card-content>\n          <img src="assets/icon/Welcome.png" />\n          <h1>the welcome page</h1>\n      </ion-card-content>\n    </ion-card>\n  </ion-slide>\n\n  <ion-slide style="background-color: crimson">\n      <ion-card style="background-color: white;height: -webkit-fill-available;">\n          <ion-card-header>\n            Header\n          </ion-card-header>\n          <ion-card-content>\n              <img src="assets/icon/Welcome.png" />\n              <h1>the welcome page</h1>\n          </ion-card-content>\n        </ion-card>\n  </ion-slide>\n\n  <ion-slide style="background-color: crimson">\n      <ion-card style="background-color: white;height: -webkit-fill-available;">\n          <ion-card-header>\n            Header\n          </ion-card-header>\n          <ion-card-content>\n              <img src="assets/icon/Welcome.png" />\n              <h1>the welcome page</h1>\n              <button ion-button outline (click)="Go()">Primary Outline</button>\n            </ion-card-content>\n        </ion-card>\n  </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_api_rest_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_subfruit_subfruit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_subvegetable_subvegetable__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_submeat_submeat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_subseafood_subseafood__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_model_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(160);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_subvegetable_subvegetable__["a" /* SubvegetablePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subfruit_subfruit__["a" /* SubfruitPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_submeat_submeat__["a" /* SubmeatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_subseafood_subseafood__["a" /* SubseafoodPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_model_model__["a" /* ModelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model/model.module#ModelPageModule', name: 'ModelPage', segment: 'model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subfruit/subfruit.module#SubfruitPageModule', name: 'SubfruitPage', segment: 'subfruit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submeat/submeat.module#SubmeatPageModule', name: 'SubmeatPage', segment: 'submeat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subseafood/subseafood.module#SubseafoodPageModule', name: 'SubseafoodPage', segment: 'subseafood', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subvegetable/subvegetable.module#SubvegetablePageModule', name: 'SubvegetablePage', segment: 'subvegetable', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_subvegetable_subvegetable__["a" /* SubvegetablePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subfruit_subfruit__["a" /* SubfruitPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_submeat_submeat__["a" /* SubmeatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_subseafood_subseafood__["a" /* SubseafoodPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_model_model__["a" /* ModelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_rest_api_rest_api__["a" /* RestApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
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
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // timer(3000).subscribe(()=> splashScreen.show());
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestApiProvider = /** @class */ (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.apiUrl = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';
        console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModelPage = /** @class */ (function () {
    function ModelPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        console.log('UserId', navParams.get('product'));
        this.productView = navParams.get('product');
    }
    ModelPage.prototype.closeModel = function () {
        this.view.dismiss();
    };
    ModelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModelPage');
    };
    ModelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-model',template:/*ion-inline-start:"/home/amr/Documents/Ionic3/helloWorld/src/pages/model/model.html"*/'<!--\n  Generated template for the ModelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>model</ion-title>\n    <ion-icon name="close" style="zoom:2.5;" (click)="closeModel()"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <div *ngFor="let product of productView"> -->\n      <p>{{productView.name}}</p>\n      <p>{{productView.weight}}</p>\n      <p>{{productView.price}}</p>\n      <button ion-button full color="danger">Add to cart</button>\n      <!-- </div> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/amr/Documents/Ionic3/helloWorld/src/pages/model/model.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModelPage);
    return ModelPage;
}());

//# sourceMappingURL=model.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map