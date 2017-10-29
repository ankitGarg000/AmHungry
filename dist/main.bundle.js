webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loading {\n    background-color: #ffffff;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: 1;\n    margin-top: 0px;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    overflow: hidden;\n    right: 0px;\n    z-index: 999999;\n}\n#loading-center {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n#loading-center img {\n    text-align: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    z-index: 99;\n    margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_profile_profile_component__ = __webpack_require__("../../../../../src/app/home/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_profile_profile_routes__ = __webpack_require__("../../../../../src/app/home/profile/profile.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */], children: __WEBPACK_IMPORTED_MODULE_8__home_home_routes__["a" /* appHomeRoutes */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_profile_profile_component__["a" /* ProfileComponent */], data: { title: 'Second Views' }, children: __WEBPACK_IMPORTED_MODULE_10__home_profile_profile_routes__["a" /* appProfileRoutes */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title {\n    font-size: 36px;\n    border-bottom: 1px solid lightgrey;\n    font-family: initial;\n    text-align: center;\n    padding-bottom: 16px;\n    margin-top: 100px;\n    color: #e93e21;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\n intro bg -->\n\n<div class=\"inner-intro parallax bg-overlay-black-70\" style=\"background: url(/assets/images/event/01.jpg);background-size: cover;background-repeat: no-repeat;width: 100%;\">\n  <div class=\"container\">\n    <div class=\"row text-center intro-title\">\n      <div class=\"col-lg-12\">\n        <div class=\"section-title text-center\">\n          <div class=\"title-separator\">\n            <div class=\"knife \">\n              <!-- <i class=\"line col-xs-1\"></i> -->\n              <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n              <!-- <i class=\"line col-xs-1\"></i> -->\n            </div>\n          </div>\n          <h2> <span class=\"text-orange\">About Us</span></h2>\n          <p>It would be great to hear from you! If you got any questions</p>\n        </div>\n      </div>\n      <ul class=\"page-breadcrumb\">\n        <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a> <i class=\"fa fa-angle-double-right\"></i></li>\n        <li><a [routerLink]=\"['./']\">About</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<!--=================================\n intro bg -->\n\n<!--=================================\n  contact -->\n\n<section class=\"contact white-bg page-section-ptb\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <p id=\"title\">About AmHungry</p>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"contact-box text-center\">\n          <p>AMHungry is one of the fastest growing food experience in the Tricity (Chandigarh, Panchkula and Mohali). Not only\n            are we obsessed with our customers, but we are also passionate about our food and our technology. AMHungry is\n            bringing good food to the hands of many and creating culinary experiences worth remembering. With a wonderful\n            balance between the cuisines of modern Indian, authentic European, delicious Mediterranean and flavorful Asian,\n            Our food is fresh, delicious, good-for-you and delivered right to your doorstep and our stunning packaging can\n            make heads turn easily. The best way to a person's heart is through their stomach, which is why each and every\n            dish is prepared with the best ingredients and tons of love and care. Gift yourself a day with AMHungry, a healthy\n            collection of all-day detox and breakfast with freshly pressed juices, smoothies, parfaits, salads, soups and\n            more. AMHungry is currently delighting foodies in Tricity (Chandigarh, Panchkula and Mohali)</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--=================================\n  contact -->\n\n<!--=================================\n  contact-map -->\n\n<!--<section class=\"contact-map\">\n  <div class=\"container-fluid\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.017231421863!2d-79.43780268425046!3d36.09306798010035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bae09664ccb%3A0xaa6b8f98d3fb8135!2s220+E+Front+St%2C+Burlington%2C+NC+27215%2C+USA!5e0!3m2!1sen!2sin!4v1475045272926\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\n  </div>\n </section>-->\n\n<!--=================================\n  contact-map -->"

/***/ }),

/***/ "../../../../../src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/home/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/cart-items/cart-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#openSubMenu{\n    position: absolute;\n    font-size: 27px;\n    color: black;\n    font-family: fantasy;\n}\n#menuTitle {\n    margin-top: 140px;\n}\n#title {\n    width: 60%;\n    margin: auto;\n    font-size: 36px;\n    border-bottom: 1px solid lightgrey;\n    font-family: initial;\n    text-align: center;\n    padding-bottom: 16px;\n}\nspan#basePrice {\n    position: absolute;\n    top: 50px;\n}\n.total {\n    float: right;\n}\n.paymentSummary {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n}\n.paymentSummary > p {\n    /*text-align: center;\n    display: block;\n    margin: auto;*/\n    float: left;\n    font-size: 20px;\n    /*border-bottom: 1px solid rgba(0, 0, 0, 0.3);*/\n    padding-bottom: 10px;\n    /*width: 20%;*/\n}\n#removeItem {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    font-weight: bold;\n}\n#removeItem:hover {\n    cursor: pointer;\n}\n.disable {\n    cursor: no-drop;\n    opacity: 0.4;\n}\n\n@media screen and (max-width: 991px) {\n    #title {\n    font-size: 30px;\n    width: 31%;\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n@media screen and (max-width: 767px){\n    #openSubMenu {\n        font-size: 23px;\n    }\n}\n@media screen and (max-width: 600px){\n    #openSubMenu {\n        font-size: 17px;\n    }\n}\n@media screen and (max-width: 480px){\n    .menu-body .menu-thumbnail img {\n       float: left;\n    }\n    .menu-body.menu-left .menu-details .price {\n    float: right;\n    color: #e93e21;\n    left: 117px;\n    top: 69px;\n    position: absolute;\n}\n    .menu-body.menu-left .menu-details .itemPrice {\n        font-size: 10px;\n        width: 50%;\n    }\n.menu-body .menu-details .price {\n    font-size: 16px;\n}\nspan#basePrice {\n    left: 109px;\n}\n#openSubMenu {\n    margin-left: 7px;\n    font-size: 14px;\n}\n.menu-body.menu-left .menu-title {\n    margin-bottom: 12px;\n    padding-bottom: 10px !important;\n}\n#title {\n    font-size: 30px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.paymentSummary {\n    padding-bottom: 10px;\n}\n.paymentSummary > p {\n    font-size: 15px;\n}\n\n}\n\n@media screen and (max-width: 440px){\n    #openSubMenu {\n        font-size: 12px;\n    }\n}\n\n@media screen and (max-width: 410px){\n    .menu-body .addCart #minus{\n        padding: 6px;\n        padding-right: 8px;\n        padding-left: 8px;\n        right: 70px;\n    }\n    .menu-body .addCart #count {\n        right: 30px;\n        top: 4px;\n    }\n    .menu-body .addCart #plus {\n        padding: 6px;\n    }\n    #openSubMenu {\n        width: 26%;\n    }\n}\n\n@media screen and (max-width: 350px){\n    #openSubMenu {\n        font-size: 10px;\n    }\n    .menu-body.menu-left .menu-details .itemPrice {\n        font-size: 9px;\n    }\n    #removeItem {\n        font-size: 11px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/cart-items/cart-items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\nour-menu -->\n\n<div *ngIf=\"!loader\" id=\"loading\">\n  <div id=\"loading-center\">\n    <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n  </div>\n</div>\n<ng2-toasty [position]=\"'top-center'\"></ng2-toasty>\n<section *ngIf=\"loader\" class=\"our-menu page-section-pt parallax pb-30\">\n  <div style=\"background-image: url(/assets/images/bread_vegetables.jpg);background-size: cover;background-repeat: no-repeat;\"\n    class=\"row\">\n    <div id=\"menuTitle\" class=\"col-lg-12 col-md-12\">\n      <div class=\"section-title text-center\">\n        <div class=\"title-separator\">\n          <div class=\"knife \">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n          </div>\n        </div>\n        <h2> <span class=\"text-orange\" (click)=\"addToast()\">CART ITEMS </span></h2>\n        <ul class=\"page-breadcrumb\">\n          <li><a [routerLink]=\"['../']\"><i class=\"fa fa-home\"></i> Home</a> <i class=\"fa fa-angle-double-right\"></i></li>\n          <li><a [routerLink]=\"['./']\">Cart Items</a></li>\n        </ul>\n      </div>\n    </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"knife-cart \">\n          <!-- <i class=\"line col-xs-1\"></i> -->\n          <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n          <!-- <i class=\"line col-xs-1\"></i> -->\n        </div>\n        <p id=\"title\">ITEMS</p>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n    <div class=\"container\" style=\"margin-top: 7%;\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"tabs clearfix\">\n\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" style=\"display: block;\" class=\"tab-pane fade in\" id=\"tab-1\">\n                <ng-container>\n                  <div class=\"row\">\n                    <div *ngFor=\"let cartItem of cartItems\" class=\"col-lg-12 col-md-12 col-sm-12\">\n                      <div class=\"menu-body menu-left\">\n                        <div class=\"menu-thumbnail\">\n                          <img class=\"img-responsive center-block\" [src]=\"cartItem.imageUrl.thumbnail\" alt=\"\">\n                        </div>\n                        <div class=\"menu-details\">\n                          <div class=\"menu-title clearfix\">\n                            <a id=\"openSubMenu\">{{cartItem.productName}}</a>\n                            <span class=\"itemPrice\">{{cartItem.description}}</span>\n                            <span id=\"basePrice\"><b>Rs.</b>{{cartItem.basePriceUnit}}</span>\n                            <div class=\"addCart\">\n                              <a id=\"removeItem\" (click)=\"removeItem(cartItem._id)\">remove</a>\n                              <a [ngClass]=\"noOfItems==0?'disabled':''\" (click)=\"cartItem.minValue > 1 && decrementNoOfItem(cartItem._id)\" id=\"minus\">-</a>\n                              <p id=\"count\">{{cartItem.minValue}}</p>\n                              <a (click)=\"incrementNoOfItem(cartItem._id)\" id=\"plus\">+</a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div id=\"noItemContent\" *ngIf='cartItems && cartItems.length===0' class=\"\">\n                      <p>There are no items in the cart</p>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n\n            <div *ngIf='cartItems && cartItems.length!==0' class=\"paymentSummary\">\n              <hr />\n              <p>Payment Summary</p>\n              <!--<div class=\"amount\">\n                <p><b>Amount:</b> Rs. {{amount}}</p>\n              </div>-->\n              <!--<div class=\"offer\">\n                <p><b>Discount:</b> {{discount}}%</p>\n              </div>-->\n              <!--<hr style=\"width: 10%;border-top: 5px solid #eee;float: left;\">-->\n              <div class=\"total\">\n                <p><b>Total:</b> Rs. {{total}}</p>\n              </div>\n              <br />\n            </div>\n            <div class=\"form-submit mt-10 text-center\">\n              <button (click)=\"cartItems && cartItems.length!==0 && generateOrder()\" id=\"submit\" [ngClass]=\"cartItems && cartItems.length===0?'disable':''\"\n                name=\"Submit\" type=\"submit\" value=\"Generates\" class=\"button\">Generate Order</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</section>\n<app-generate-order-modal #generateOrderModal [title]=\"'Generate Order'\" [total]=\"total\" [products]=\"itemArray\"></app-generate-order-modal>\n\n<!--=================================\nspecial-menu -->\n<hr />\n<app-today-special-menu></app-today-special-menu>\n<hr />\n<app-how-it-works></app-how-it-works>"

/***/ }),

/***/ "../../../../../src/app/home/cart-items/cart-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commonComponents_generate_order_modal_generate_order_modal_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartItemsComponent = (function () {
    function CartItemsComponent(router, homeService, route, toastyService, toastyConfig) {
        var _this = this;
        this.router = router;
        this.homeService = homeService;
        this.route = route;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.noOfItems = 0;
        this.amount = 0;
        this.toastyConfig.theme = 'material';
        this.itemArray = new Array();
        this.loader = true;
        this.homeService.getCartDetails().subscribe(function (items) {
            _this.cartItems = items.data;
            console.log(_this.cartItems);
            if (_this.cartItems) {
                _this.cartItems.map(function (cartItem) {
                    _this.amount = _this.amount + cartItem.basePriceUnit * cartItem.minValue;
                    // this.itemObj = {
                    //   productId: cartItem._id,
                    //   quantity: cartItem.minValue,
                    //   price: cartItem.basePriceUnit,
                    //   name: cartItem.productName
                    // }
                    _this.itemArray.push(cartItem._id);
                });
                console.log(_this.itemArray);
                _this.total = (_this.amount).toString();
                console.log(_this.total);
            }
        });
    }
    CartItemsComponent.prototype.ngOnInit = function () {
    };
    // addToast() {
    //       // Or create the instance of ToastOptions
    //       var toastOptions:ToastOptions = {
    //           title: "My title",
    //           msg: "The message",
    //           showClose: true,
    //           timeout: 5000,
    //           theme: 'default',
    //       };
    //       // Add see all possible types in one shot
    //       // this.toastyService.info(toastOptions);
    //       this.toastyService.success(toastOptions);
    //       // this.toastyService.wait(toastOptions);
    //       // this.toastyService.error(toastOptions);
    //       // this.toastyService.warning(toastOptions);
    //   }
    CartItemsComponent.prototype.incrementNoOfItem = function (id) {
        var _this = this;
        this.cartItems.map(function (cartItem) {
            if (cartItem._id === id) {
                _this.noOfItems = cartItem.minValue;
                cartItem.minValue += 1;
                _this.amount = _this.amount + cartItem.basePriceUnit;
                _this.total = (_this.amount).toString();
            }
        });
    };
    CartItemsComponent.prototype.decrementNoOfItem = function (id) {
        var _this = this;
        console.log(id);
        this.cartItems.map(function (cartItem) {
            if (cartItem._id === id) {
                _this.noOfItems = cartItem.minValue;
                cartItem.minValue -= 1;
                _this.amount = _this.amount - cartItem.basePriceUnit;
                _this.total = (_this.amount).toString();
            }
        });
    };
    CartItemsComponent.prototype.removeItem = function (id) {
        var _this = this;
        this.homeService.removeItemFromCart(id).subscribe(function (data) {
            console.log(data);
            if (data.statusCode === 200) {
                _this.homeService.sendCount(-1);
                _this.homeService.getCartDetails().subscribe(function (items) {
                    _this.amount = 0;
                    _this.cartItems = items.data;
                    _this.cartItems.map(function (cartItem) {
                        _this.amount = _this.amount + cartItem.basePriceUnit * cartItem.minValue;
                    });
                    _this.itemArray.splice(id, 1);
                    console.log(_this.itemArray);
                    _this.total = (_this.amount).toString();
                });
                var toastOptions = {
                    title: "",
                    msg: "Successfully Removed",
                    showClose: true,
                    timeout: 2000,
                    theme: 'default',
                };
                _this.toastyService.success(toastOptions);
            }
            else {
                var toastOptions = {
                    title: "",
                    msg: "Cannot be removed due to some Error",
                    showClose: true,
                    timeout: 2000,
                    theme: 'default',
                };
                _this.toastyService.error(toastOptions);
            }
        });
    };
    CartItemsComponent.prototype.generateOrder = function () {
        this.generateOrderModal.show();
    };
    return CartItemsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('generateOrderModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__commonComponents_generate_order_modal_generate_order_modal_component__["a" /* GenerateOrderModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commonComponents_generate_order_modal_generate_order_modal_component__["a" /* GenerateOrderModalComponent */]) === "function" && _a || Object)
], CartItemsComponent.prototype, "generateOrderModal", void 0);
CartItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart-items',
        template: __webpack_require__("../../../../../src/app/home/cart-items/cart-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/cart-items/cart-items.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */]) === "function" && _f || Object])
], CartItemsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/cart-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\nfooter 2 -->\n\n<footer id=\"footer\" class=\"footer\">\n  <div class=\"object-bottom\">\n    <div class=\"object-left\">\n      <img class=\"img-responsive bottom\" src=\"/assets/images/object/06.png\" alt=\"\">\n    </div>\n    <div class=\"object-right\">\n      <img  class=\"img-responsive bottom\" src=\"/assets/images/object/16.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 text-center mt-60\">\n        <div class=\"footer-logo\">\n          <img id=\"logo-footer\" class=\"img-responive\" src=\"/assets/images/logo.png\" alt=\"\">\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2\">\n          <p class=\" text-white mb-60\">We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\n        <div class=\"newsletter\">\n          <h4 class=\"text-white mb-30\">Newsletter</h4>\n          <p class=\"text-white\">Signing up to our newsletter keeps you up-to-date!</p>\n          <div class=\"newsletter-input\">\n            <input type=\"email\" placeholder=\"Your email*\" name=\"email\">\n            <a href=\"#\"><i class=\"fa fa-envelope-o\"></i></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\n        <div class=\"tweet\">\n          <h4 class=\"text-white mb-30\">Latest tweet</h4>\n          <div class=\"tweet-block mb-20\">\n            <div class=\"icon\">\n              <i class=\"fa fa-twitter text-white\"></i>\n            </div>\n            <div class=\"content\">\n              <p class=\"text-white\">Our brand new has just launched! </p>\n              <span class=\"text-orange\">03:05 AM Sep 18th</span>\n            </div>\n          </div>\n          <div class=\"tweet-block\">\n            <div class=\"icon\">\n              <i class=\"fa fa-twitter text-white\"></i>\n            </div>\n            <div class=\"content\">\n              <p class=\"text-white\">Get your photo on win prizes. </p>\n              <span class=\"text-orange\">03:05 AM Sep 18th</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\n        <div class=\"opening-time\">\n          <h4 class=\"text-white mb-30\">Open time</h4>\n          <ul>\n            <li>Monday<span class=\"text-right\">8am - 2pm </span></li>\n            <li>Tuesday<span>10am - 4pm</span></li>\n            <li>Wednesday<span >11am - 4pm</span></li>\n            <li>Close on public holidays</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6\">\n        <div class=\"contact\">\n          <h4 class=\"text-white mb-30\">Contact</h4>\n          <p class=\"text-white\">1234 North Avenue Luke, IN 360001</p>\n          <p class=\"text-white\">(01) 123 456 7890</p>\n          <p class=\"text-white\">support@website.com</p>\n        </div>\n      </div>\n    </div>-->\n  </div>\n  <div class=\"footer-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"co-lg-12 co-md-12 col-sm-12 col-xs-12 text-center\">\n          <div class=\"footer-social\">\n            <ul class=\"list-inline\">\n              <li><a href=\"#\" data-tooltip=\"facebook\"> <i class=\"fa fa-facebook\"></i> </a> </li>\n              <li><a href=\"#\" data-tooltip=\"twitter\"> <i class=\"fa fa-twitter\"></i> </a> </li>\n            </ul>\n          </div>\n          <p class=\"text-white mt-30\"> &copy;Copyright <span id=\"copyright\"></span> All right reserved by <span class=\"text-orange\">Am Hungry</span></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<!--=================================\nfooter -->"

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/home/commonComponents/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/commonComponents/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-scroll-header { \n    z-index: 1003; \n    position: fixed; \n    width: 100%; \n    -webkit-animation: header 1s; \n            animation: header 1s;\n  }\n  .header {\n      padding-top: 0px !important;\n  }\n@-webkit-keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n@keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n.header img{ \n    cursor: pointer; \n    width: 95px; \n}\n.navbar {\n    border-radius: 0px;\n    margin-bottom: 0px !important;\n}\n.navbar-default {\n    border: none;\n    background-color: rgba(107, 38, 30, 0.78) !important;\n}\n.navbar-right{\n    margin: 17px;\n}\n.navbar-brand {\n    margin-left: 20px !important;\n}\n.navbar-default .navbar-nav>li>a {\n    color: white;\n}\n.navbar-default .navbar-nav>li>a:hover {\n    cursor: pointer;\n    background-color: #e93e21;\n    border-radius: 50%;\n}\n.navbar-default .navbar-nav>li>a:focus {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n.active {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n#cart {\n    width: 32px;\n    position: absolute;\n    right: 9px;\n    top: 6px;\n}\n.dropdown-menu {\n    border-radius: 25px !important;\n    margin-top: 10px !important;\n}\n.navbar-default .navbar-nav>.open>a, \n.navbar-default .navbar-nav>.open>a:focus, \n.navbar-default .navbar-nav>.open>a:hover {\n    background-color: transparent;\n}\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    background-color: transparent !important;\n    cursor: pointer;\n    font-weight: bold;\n}\n#send{ \n    display: inline-block; \n    width: 45px; \n    height: 45px; \n    line-height: 45px;\n    text-align: center; \n    z-index: 99; \n    position: absolute;\n    right: 0px;\n    border-left: 1px solid lightgrey;\n    background-color: #e93e21;\n    color: white;\n}\n#login{\n    text-align: center;\n    font-size: 36px;\n    color: #e93e21;\n}\n#verify{\n    display: block;\n    margin: auto;\n}\n#note{\n  text-align: center;\n}\n.disable{\n  opacity: 0.5;\n  cursor: no-drop;\n}\n.form-field {\n    margin-bottom: 16px;\n}\n.error{\n    position: absolute;\n    top: 52px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n#noOfItems{\n    background-color: #e93e21;\n    color: white;\n    padding: 6px;\n    position: absolute;\n    z-index: 1000;\n    top: 4px;\n    right: 47px;\n    border-radius: 50%;\n}\n.resend {\n    float: right;\n}\n@media screen and (max-width: 767px) {\n    .header {\n        position: fixed;\n        background-color: transparent;\n    }\n    .header img {\n        width: 75px;\n    }\n    .navbar-toggle{\n        margin: 23px;\n        background-color: #e93e21;\n        border: none;\n        margin-right: 58px;\n    }\n    .navbar-default .navbar-toggle .icon-bar {\n        background-color: white;\n    }\n    .navbar-default .navbar-nav>li>a {\n        text-align: center;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a {\n        text-align: center;\n        color: white !important;\n    }\n    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n        background-color: #e93e21;\n    }\n    #cart{\n        right: 6px;\n        top: 6px;\n    }\n}\n\n/*@media screen and (max-width: 480px){\n    .navbar{\n        min-height: 73px !important;\n        margin-bottom: 0px !important;\n    }\n}*/\n@media screen and  (max-width: 570px){\n    .error {\n        font-size: 9px !important;\n        top: 56px;\n    }\n    .form-field {\n        margin-bottom: 24px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "  <div bsModal #generateOrderModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">{{title}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <form class=\"form-horizontal\" [formGroup]=\"generateOrderForm\" novalidate>\n          <div class=\"contact-form\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-user-circle-o\"></i>\n                  <input type=\"tel\" [formControl]=\"generateOrderForm.controls['customerName']\" placeholder=\"Name\" class=\"placeholder\" name=\"phone\">\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['customerName'].hasError('required') &&  generateOrderForm.controls['customerName'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['customerName'].hasError('pattern') &&  generateOrderForm.controls['customerName'].dirty\">Should contain only characters</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-address-book\"></i>\n                  <input type=\"tel\" [formControl]=\"generateOrderForm.controls['addressLine1']\" placeholder=\"Address Line1\" class=\"placeholder\" name=\"addressLine1\">\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['addressLine1'].hasError('required') &&  generateOrderForm.controls['addressLine1'].touched\">This field is required </div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-address-book\"></i>\n                  <input type=\"tel\" [formControl]=\"generateOrderForm.controls['addressLine2']\" placeholder=\"Address Line2\" class=\"placeholder\" name=\"addressLine2\">\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['addressLine2'].hasError('required') &&  generateOrderForm.controls['addressLine2'].touched\">This field is required </div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-location-arrow\"></i>\n                  <input type=\"tel\" [formControl]=\"generateOrderForm.controls['city']\" placeholder=\"City\" class=\"placeholder\" name=\"city\">\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['city'].hasError('required') &&  generateOrderForm.controls['city'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['city'].hasError('pattern') &&  generateOrderForm.controls['city'].dirty\">Should contain only characters</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-location-arrow\"></i>\n                  <input type=\"tel\" [formControl]=\"generateOrderForm.controls['pincode']\" placeholder=\"Pincode\" class=\"placeholder\" name=\"pincode\">\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['pincode'].hasError('required') &&  generateOrderForm.controls['pincode'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['pincode'].hasError('pattern') &&  generateOrderForm.controls['pincode'].dirty\">Should contain only numeric and contain 6 numerics</div>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <select [formControl]=\"generateOrderForm.controls['orderMethod']\">\n                    <option [selected]=\"generateOrderForm.controls['orderMethod'].value == select\" value=\"select\" selected>Select Payment Method</option>\n                    <option value=\"COD\">COD</option>\n                    <option value=\"PAYTM\">PAYTM</option>\n                  </select>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['orderMethod'].hasError('required') &&  generateOrderForm.controls['orderMethod'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['orderMethod'].hasError('pattern') &&  generateOrderForm.controls['orderMethod'].dirty\">Should contain only numeric and starts from 7,8 or 9</div>\n                  <div class=\"error\" *ngIf=\"generateOrderForm.controls['orderMethod'].dirty && !generateOrderForm.controls['orderMethod'].hasError('pattern') && generateOrderForm.controls['orderMethod'].hasError('maxlength')  \">Should contain 10 characters</div>\n                </div>\n              </div>\n              <div *ngIf=\"loader\" id=\"loading\">\n                <div id=\"loading-center\">\n                  <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-submit mt-10 text-center\">\n              <button id=\"submit\" (click)=\"!generateOrderForm.invalid && order(generateOrderForm.value)\" [ngClass]=\"generateOrderForm.invalid?'disable':''\"\n                name=\"Submit\" type=\"submit\" value=\"Send\" class=\"button\">Order</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"pull-left\">\n          <button class=\"btn btn-default\" (click)=\"hide()\"> Cancel </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/ng2-bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateOrderModalComponent = (function () {
    function GenerateOrderModalComponent(form, router, homeService, route, toastyService, toastyConfig) {
        this.form = form;
        this.router = router;
        this.homeService = homeService;
        this.route = route;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.phoneNo1 = JSON.parse(localStorage.getItem('phoneNumber')).number;
        this.accessToken = JSON.parse(localStorage.getItem('accessToken'));
        console.log(this.phoneNo1);
        this.generateOrderForm = this.form.group({
            customerName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            addressLine1: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            addressLine2: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            pincode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[1-9][0-9]{5}$')]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*')]],
            orderMethod: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    GenerateOrderModalComponent.prototype.ngOnInit = function () {
    };
    GenerateOrderModalComponent.prototype.show = function () {
        this.generateOrderModal.show();
        this.loader = false;
        this.verify = false;
        this.generateOrderForm.reset();
    };
    GenerateOrderModalComponent.prototype.hide = function () {
        this.generateOrderModal.hide();
    };
    GenerateOrderModalComponent.prototype.order = function (value) {
        var _this = this;
        debugger;
        var data = {
            productId: this.products,
            offer: '1',
            customerName: value.customerName,
            addressLine1: value.addressLine1,
            addressLine2: value.addressLine2,
            city: value.city,
            pinCode: value.pincode,
            phoneNo: this.phoneNo1,
            orderMethod: value.orderMethod,
            netAmount: this.total
        };
        console.log(data);
        this.homeService.generateOrder(data).subscribe(function (data) {
            if (data.statusCode === 200) {
                var toastOptions = {
                    title: ' Order Id:' + data.data,
                    msg: data.message,
                    showClose: true,
                    timeout: 12000,
                    theme: 'default',
                };
                _this.toastyService.success(toastOptions);
                _this.generateOrderModal.hide();
            }
        });
    };
    return GenerateOrderModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('generateOrderModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], GenerateOrderModalComponent.prototype, "generateOrderModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GenerateOrderModalComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GenerateOrderModalComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GenerateOrderModalComponent.prototype, "total", void 0);
GenerateOrderModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-generate-order-modal',
        template: __webpack_require__("../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["a" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["a" /* ToastyConfig */]) === "function" && _g || Object])
], GenerateOrderModalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/generate-order-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/login-modal/login-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-scroll-header { \n    z-index: 1003; \n    position: fixed; \n    width: 100%; \n    -webkit-animation: header 1s; \n            animation: header 1s;\n  }\n  .header {\n      padding-top: 0px !important;\n  }\n@-webkit-keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n@keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n.header img{ \n    cursor: pointer; \n    width: 95px; \n}\n.navbar {\n    border-radius: 0px;\n    margin-bottom: 0px !important;\n}\n.navbar-default {\n    border: none;\n    background-color: rgba(107, 38, 30, 0.78) !important;\n}\n.navbar-right{\n    margin: 17px;\n}\n.navbar-brand {\n    margin-left: 20px !important;\n}\n.navbar-default .navbar-nav>li>a {\n    color: white;\n}\n.navbar-default .navbar-nav>li>a:hover {\n    cursor: pointer;\n    background-color: #e93e21;\n    border-radius: 50%;\n}\n.navbar-default .navbar-nav>li>a:focus {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n.active {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n#cart {\n    width: 32px;\n    position: absolute;\n    right: 9px;\n    top: 6px;\n}\n.dropdown-menu {\n    border-radius: 25px !important;\n    margin-top: 10px !important;\n}\n.navbar-default .navbar-nav>.open>a, \n.navbar-default .navbar-nav>.open>a:focus, \n.navbar-default .navbar-nav>.open>a:hover {\n    background-color: transparent;\n}\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    background-color: transparent !important;\n    cursor: pointer;\n    font-weight: bold;\n}\n#send{ \n    display: inline-block; \n    width: 45px; \n    height: 45px; \n    line-height: 45px;\n    text-align: center; \n    z-index: 99; \n    position: absolute;\n    right: 0px;\n    border-left: 1px solid lightgrey;\n    background-color: #e93e21;\n    color: white;\n}\n#login{\n    text-align: center;\n    font-size: 36px;\n    color: #e93e21;\n}\n#verify{\n    display: block;\n    margin: auto;\n}\n#note{\n  text-align: center;\n  margin-bottom: 0px;\n  margin-top: 34px;\n}\n.disable{\n  opacity: 0.5;\n  cursor: no-drop;\n}\n.error{\n    position: absolute;\n    top: 67px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n#noOfItems{\n    background-color: #e93e21;\n    color: white;\n    padding: 6px;\n    position: absolute;\n    z-index: 1000;\n    top: 4px;\n    right: 47px;\n    border-radius: 50%;\n}\n.resend {\n    float: right;\n}\n@media screen and (max-width: 767px) {\n    .header {\n        position: fixed;\n        background-color: transparent;\n    }\n    .header img {\n        width: 75px;\n    }\n    .navbar-toggle{\n        margin: 23px;\n        background-color: #e93e21;\n        border: none;\n        margin-right: 58px;\n    }\n    .navbar-default .navbar-toggle .icon-bar {\n        background-color: white;\n    }\n    .navbar-default .navbar-nav>li>a {\n        text-align: center;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a {\n        text-align: center;\n        color: white !important;\n    }\n    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n        background-color: #e93e21;\n    }\n    #cart{\n        right: 6px;\n        top: 6px;\n    }\n}\n\n/*/*@media screen and (max-width: 480px){\n    .navbar{\n        min-height: 73px !important;\n        margin-bottom: 0px !important;\n    }\n}*/\n\n@media screen and  (max-width: 480px){\n    #note {\n        font-size: 13px !important;\n    }\n}\n@media screen and  (max-width: 350px){\n    .error {\n        font-size: 9px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/login-modal/login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "  <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">{{title}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <form class=\"form-horizontal\" [formGroup]=\"loginForm\" novalidate>\n          <div class=\"contact-form\">\n            <div class=\"row\">\n              <div *ngIf=\"!verify && !loader \" class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div style=\"margin-bottom: 10px;\" class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-phone\"></i>\n                  <a href=\"javascript:void(0)\" (click)=\"loginForm.controls['phone'].valid && sendOtp(loginForm.controls['phone'].value)\"><i id=\"send\" class=\"fa fa-paper-plane\"></i></a>\n                  <input type=\"tel\" [formControl]=\"loginForm.controls['phone']\" placeholder=\"Phone*\" class=\"placeholder\" name=\"phone\">\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].hasError('required') &&  loginForm.controls['phone'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].hasError('pattern') &&  loginForm.controls['phone'].dirty\">Should contain only numeric and starts from 7,8 or 9</div>\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].dirty && !loginForm.controls['phone'].hasError('pattern') && loginForm.controls['phone'].hasError('maxlength')  \">Should contain 10 characters</div>\n                </div>\n                <p id=\"note\"><b>Note:</b>&nbsp;An OTP will be send to this number</p>\n              </div>\n              <div *ngIf=\"loader\" id=\"loading\">\n                <div id=\"loading-center\">\n                  <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n                </div>\n              </div>\n\n              <div *ngIf=\"verify && !loader\" class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-snowflake-o\"></i>\n                  <input type=\"text\" [formControl]=\"loginForm.controls['otp']\" placeholder=\"Enter OTP*\" class=\"placeholder\" name=\"otp\">\n                  <div class=\"error\" *ngIf=\"!error && loginForm.controls['otp'].hasError('required') &&  loginForm.controls['otp'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"!error && loginForm.controls['otp'].hasError('pattern') &&  loginForm.controls['otp'].dirty\">should contain only 8 letters</div>\n                  <div class=\"error\" *ngIf=\"error\">{{error}}</div>\n                </div>\n                <div class=\"resend\">\n                  <a href=\"javascript:void(0)\" (click)=\"resendOtp(loginForm.value)\">Resend OTP</a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"verify\" class=\"form-submit mt-10 text-center\">\n              <button id=\"submit\" (click)=\"loginForm.controls['otp'].value && verifyOtp(loginForm.value)\" [ngClass]=\"loginForm.invalid?'disable':''\"\n                name=\"Submit\" type=\"submit\" value=\"Send\" class=\"button\">VERIFY</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"pull-left\">\n          <button class=\"btn btn-default\" (click)=\"hide()\"> Cancel </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/login-modal/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/ng2-bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginModalComponent = (function () {
    function LoginModalComponent(form, homeService, router) {
        this.form = form;
        this.homeService = homeService;
        this.router = router;
        this.loginForm = this.form.group({
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[789][0-9]{9}$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)]],
            otp: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.show = function () {
        this.childModal.show();
        this.loader = false;
        this.verify = false;
        this.loginForm.reset();
    };
    LoginModalComponent.prototype.hide = function () {
        this.childModal.hide();
    };
    LoginModalComponent.prototype.sendOtp = function (number) {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.homeService.sendOtpToUser(number).subscribe(function (response) {
                if (response) {
                    _this.isLoggedIn = response.data.phoneVerified;
                    _this.authorization = response.data.accessToken;
                    _this.otp = response.data.OTPCode;
                }
                else {
                    console.log('error');
                }
                if (response && _this.isLoggedIn) {
                    localStorage.setItem('phoneNumber', JSON.stringify({ number: number }));
                    localStorage.setItem('accessToken', JSON.stringify(_this.authorization));
                    _this.homeService.ToggleNavbar(false);
                    _this.router.navigate(['/home', 'profile']);
                    _this.verify = true;
                    _this.loader = false;
                    _this.childModal.hide();
                }
                console.log('******************response***************');
                console.log(response);
                localStorage.setItem('phoneNumber', JSON.stringify({ number: number }));
                localStorage.setItem('accessToken', JSON.stringify(_this.authorization));
                _this.verify = true;
                _this.loader = false;
            });
        }, 1000);
    };
    LoginModalComponent.prototype.verifyOtp = function (value) {
        var _this = this;
        var phoneNumber = value.phone;
        var otp = value.otp;
        this.loader = true;
        this.homeService.verifyOtp(phoneNumber, otp).subscribe(function (response) {
            console.log('******************responseVerify***************');
            console.log(response);
            if (response) {
                if (response.statusCode === 200) {
                    localStorage.setItem('phoneNumber', JSON.stringify({ phoneNumber: phoneNumber }));
                    _this.isLoggedIn = true;
                    _this.loader = false;
                    _this.homeService.ToggleNavbar(false);
                    _this.router.navigate(['/home', 'profile']);
                    _this.childModal.hide();
                }
            }
        }, function (error) {
            if (error) {
                _this.error = 'Invalid Verification Code';
            }
        });
    };
    LoginModalComponent.prototype.resendOtp = function (value) {
        var phoneNumber = value.phone;
        this.homeService.resendOtp(phoneNumber).subscribe(function (response) {
            console.log(response);
        });
    };
    return LoginModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_ng2_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], LoginModalComponent.prototype, "childModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LoginModalComponent.prototype, "title", void 0);
LoginModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-modal',
        template: __webpack_require__("../../../../../src/app/home/commonComponents/login-modal/login-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/commonComponents/login-modal/login-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/login-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-scroll-header { \n    z-index: 1003; \n    position: fixed; \n    width: 100%; \n    -webkit-animation: header 1s; \n            animation: header 1s;\n  }\n  .header {\n      padding-top: 0px !important;\n  }\n@-webkit-keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n@keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n.header img{ \n    cursor: pointer; \n    width: 95px; \n}\n.navbar {\n    border-radius: 0px;\n    margin-bottom: 0px !important;\n}\n.navbar-default {\n    border: none;\n    background-color: rgba(113, 79, 75, 0.78) !important;\n}\n.navbar-right{\n    margin: 17px;\n}\n.navbar-brand {\n    margin-left: 20px !important;\n}\n.navbar-default .navbar-nav>li>a {\n    color: white;\n}\n.navbar-default .navbar-nav>li>a:hover {\n    cursor: pointer;\n    background-color: #e93e21;\n    border-radius: 50%;\n}\n.navbar-default .navbar-nav>li>a:focus {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n.active {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n#cart {\n    width: 32px;\n    position: absolute;\n    right: 9px;\n    top: 6px;\n}\n.dropdown-menu {\n    border-radius: 25px !important;\n    margin-top: 10px !important;\n}\n.navbar-default .navbar-nav>.open>a, \n.navbar-default .navbar-nav>.open>a:focus, \n.navbar-default .navbar-nav>.open>a:hover {\n    background-color: transparent;\n}\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    background-color: transparent !important;\n    cursor: pointer;\n    font-weight: bold;\n}\n#send{ \n    display: inline-block; \n    width: 45px; \n    height: 45px; \n    line-height: 45px;\n    text-align: center; \n    z-index: 99; \n    position: absolute;\n    right: 0px;\n    border-left: 1px solid lightgrey;\n    background-color: #e93e21;\n    color: white;\n}\n#login{\n    text-align: center;\n    font-size: 36px;\n    color: #e93e21;\n}\n#verify{\n    display: block;\n    margin: auto;\n}\n#note{\n  text-align: center;\n}\n.disable{\n  opacity: 0.5;\n  cursor: no-drop;\n}\n.error{\n    position: absolute;\n    top: 52px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n#noOfItems{\n    background-color: #e93e21;\n    color: white;\n    padding: 6px;\n    position: absolute;\n    z-index: 1000;\n    top: 4px;\n    right: 47px;\n    border-radius: 50%;\n}\n.resend {\n    float: right;\n}\n@media screen and (max-width: 767px) {\n    .header {\n        position: fixed;\n        background-color: transparent;\n    }\n    .header img {\n        width: 75px;\n    }\n    .navbar-toggle{\n        margin: 23px;\n        background-color: #e93e21;\n        border: none;\n        margin-right: 58px;\n    }\n    .navbar-default .navbar-toggle .icon-bar {\n        background-color: white;\n    }\n    .navbar-default .navbar-nav>li>a {\n        text-align: center;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a {\n        text-align: center;\n        color: white !important;\n    }\n    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n        background-color: #e93e21;\n    }\n    #cart{\n        right: 6px;\n        top: 6px;\n    }\n}\n\n/*@media screen and (max-width: 480px){\n    .navbar{\n        min-height: 73px !important;\n        margin-bottom: 0px !important;\n    }\n}*/\n/*\n@media screen and (min-width: 375px) and (max-width: 415px){\n\n    .navbar{\n        min-height: 100px !important;\n        margin-bottom: 0px !important;\n    }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" [ngClass]=\"{'page-scroll-header': isScrolled}\" class=\"header\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n        <a class=\"navbar-brand\" [routerLink]=\"['../']\"><img [ngClass]=\"{'page-scroll-header-img': isScrolled}\" id=\"logo_img\" src=\"/assets/images/logo.png\" alt=\"logo\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/home']\" href=\"javascript:void(0)\"> Home </a>\n          </li>\n          <li><a style=\"cursor: pointer;\" (click)=\"open()\">Login</a></li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu&nbsp;<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let category of categories\">\n                <a (click)=\"openMenu(category._id)\">\n                    {{category.name}}\n                </a>\n              </li>\n            </ul>\n          </li>\n          <li><a routerLinkActive=\"active\" href=\"javascript:void(0)\" [routerLink]=\"['./', 'about']\">About us</a>\n          </li>\n          <li><a routerLinkActive=\"active\" href=\"javascript:void(0)\" [routerLink]=\"['./', 'contact']\"> Contact us</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <img (click)=\"open()\" id=\"cart\" src=\"/assets/images/shopping_cart.png\"\n  />\n    <!--<div>\n      <div class=\"row container-fluid\">\n        <button (click)=\"myExtNgxModal.openExt()\"> open my modal</button>\n        <app-navbar #myExtNgxModal>\n          <modal #myModal>\n              <modal-header>\n                  <h1>Modal header</h1>\n              </modal-header>\n              <modal-content>\n                  Press F12 see the console...press a key while modal open\n              </modal-content>\n              <modal-footer>\n                  <button class=\"btn btn-primary\" (click)=\"myModal.close()\">close</button>\n              </modal-footer>\n          </modal>\n        </app-navbar>\n      </div>\n    </div>-->\n\n\n</header>\n\n<!--\n<div #my>\n  <modal #myModal>\n    <modal-header>\n      <h1 id=\"login\">Login</h1>\n    </modal-header>\n    <modal-content id=\"content\">\n\n    </modal-content>\n    <modal-footer>\n      <button class=\"btn btn-danger\" (click)=\"myModal.close()\">close</button>\n    </modal-footer>\n  </modal>-->\n<!--</div>-->\n\n<app-login-modal #childModal [title]=\"'Login'\"></app-login-modal>\n\n<!--<div #childModal>\n  <div class=\"modal-header\">\n    Login\n  </div>\n  <div id=\"content\" class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <form class=\"form-horizontal\" [formGroup]=\"loginForm\" novalidate>\n          <div class=\"contact-form\">\n            <div class=\"row\">\n              <div *ngIf=\"!verify && !loader \" class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div style=\"margin-bottom: 10px;\" class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-phone\"></i>\n                  <a href=\"javascript:void(0)\" (click)=\"loginForm.controls['phone'].valid && sendOtp(loginForm.controls['phone'].value)\"><i id=\"send\" class=\"fa fa-paper-plane\"></i></a>\n                  <input type=\"tel\" [formControl]=\"loginForm.controls['phone']\" placeholder=\"Phone*\" class=\"placeholder\" name=\"phone\">\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].hasError('required') &&  loginForm.controls['phone'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].hasError('pattern') &&  loginForm.controls['phone'].dirty\">Should contain only numeric and starts from 7,8 or 9</div>\n                  <div class=\"error\" *ngIf=\"loginForm.controls['phone'].dirty && !loginForm.controls['phone'].hasError('pattern') && loginForm.controls['phone'].hasError('maxlength')  \">Should contain 10 characters</div>\n                </div>\n                <p id=\"note\"><b>Note:</b>&nbsp;An OTP will be send to this number</p>\n              </div>\n              <div *ngIf=\"loader\" id=\"loading\">\n                <div id=\"loading-center\">\n                  <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n                </div>\n              </div>\n\n              <div *ngIf=\"verify && !loader\" class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-field\">\n                  <i id=\"phone\" class=\"fa fa-snowflake-o\"></i>\n                  <input type=\"text\" [formControl]=\"loginForm.controls['otp']\" placeholder=\"Enter OTP*\" class=\"placeholder\" name=\"otp\">\n                  <div class=\"error\" *ngIf=\"!error && loginForm.controls['otp'].hasError('required') &&  loginForm.controls['otp'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"!error && loginForm.controls['otp'].hasError('pattern') &&  loginForm.controls['otp'].dirty\">should contain only 8 letters</div>\n                  <div class=\"error\" *ngIf=\"error\">{{error}}</div>\n                </div>\n                <div class=\"resend\">\n                  <a href=\"javascript:void(0)\" (click)=\"resendOtp(loginForm.value)\">Resend OTP</a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"verify\" class=\"form-submit mt-10 text-center\">\n              <button id=\"submit\" (click)=\"loginForm.controls['otp'].value && verifyOtp(loginForm.value)\" [ngClass]=\"loginForm.invalid?'disable':''\"\n                name=\"Submit\" type=\"submit\" value=\"Send\" class=\"button\">VERIFY</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/home/commonComponents/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_modal_login_modal_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/login-modal/login-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ModalModule} from "ngx-modal"

var NavbarComponent = (function () {
    // @ViewChild('myModal') modal: ModalDirective;
    // @ContentChild(Modal) modal: Modal;
    function NavbarComponent(homeService, router) {
        var _this = this;
        this.homeService = homeService;
        this.router = router;
        this.changePos = 70;
        this.homeService.getCategories().subscribe(function (data) {
            console.log(data);
            _this.categories = data.data;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.modal.show();
    };
    NavbarComponent.prototype.open = function () {
        this.childModal.show();
    };
    // openExt():void {
    //   this.modal.open();
    // }
    NavbarComponent.prototype.fixedHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    NavbarComponent.prototype.openMenu = function (id) {
        this.homeService.sendSubCategoryId(id);
        this.router.navigate(['/home', id]);
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_modal_login_modal_component__["a" /* LoginModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_modal_login_modal_component__["a" /* LoginModalComponent */]) === "function" && _a || Object)
], NavbarComponent.prototype, "childModal", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/home/commonComponents/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/commonComponents/navbar/navbar.component.css")],
        host: {
            '(window:scroll)': 'fixedHeader($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disable{\n    cursor: no-drop;\n    opacity: 0.5;\n}\n.error{\n    position: absolute;\n    top: 52px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n.messageError{\n    position: absolute;\n    bottom: -26px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n.contact-form .form-field i {\n    position: absolute;\n    left: 0;\n    color: #e93e21;\n    display: inline-block;\n    width: 45px;\n    height: 45px;\n    line-height: 45px;\n    text-align: center;\n    z-index: 99;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\n intro bg -->\n<ng2-toasty [position]=\"'top-center'\"></ng2-toasty>\n<div class=\"inner-intro parallax bg-overlay-black-70\" style=\"background: url(/assets/images/event/01.jpg);background-size: cover;background-repeat: no-repeat;width: 100%;\">\n  <div class=\"container\">\n    <div class=\"row text-center intro-title\">\n      <div class=\"col-lg-12\">\n        <div class=\"section-title text-center\">\n          <div class=\"title-separator\">\n            <div class=\"knife-cart \">\n              <!-- <i class=\"line col-xs-1\"></i> -->\n              <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n              <!-- <i class=\"line col-xs-1\"></i> -->\n            </div>\n          </div>\n          <h2> <span class=\"text-orange\">Contact Us</span> </h2>\n          <p>It would be great to hear from you! If you got any questions</p>\n        </div>\n      </div>\n      <ul class=\"page-breadcrumb\">\n        <li><a [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> Home</a> <i class=\"fa fa-angle-double-right\"></i></li>\n        <li><a [routerLink]=\"['./']\">Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<!--=================================\n intro bg -->\n\n<!--=================================\n  contact -->\n\n<section class=\"contact white-bg page-section-ptb\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"contact-box text-center\">\n          <i class=\"fa fa-map-marker\"></i>\n          <h5>Address</h5>\n          <p>#167, Godown No.4 Gurdwara Tibbi Sahib Khuda Ali Sher, Chandigarh - 160103</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"contact-box text-center\">\n          <i class=\"fa fa-phone\"></i>\n          <h5>Phone</h5>\n          <p> 98768-03001</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <div class=\"contact-box text-center\">\n          <i class=\"fa fa-envelope-o\"></i>\n          <h5>Email</h5>\n          <p>armfoodsandretail@gmail.com</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-30\">\n      <div class=\"col-lg-12\">\n        <div id=\"formmessage\">Success/Error Message Goes Here</div>\n        <form class=\"form-horizontal\" [formGroup]=\"contactForm\" (ngSubmit)=\"submit(contactForm.value)\" novalidate>\n          <div class=\"contact-form\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"form-field\">\n                  <i class=\"fa fa-user\"></i>\n                  <input id=\"name\" type=\"text\" [formControl]=\"contactForm.controls['name']\" placeholder=\"Name*\" class=\"placeholder\">\n                  <div class=\"error\" *ngIf=\"contactForm.controls['name'].hasError('required') &&  contactForm.controls['name'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"contactForm.controls['name'].hasError('pattern') &&  contactForm.controls['name'].dirty\">Should contain only letters</div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"form-field\">\n                  <i class=\"fa fa-phone\"></i>\n                  <input type=\"tel\" [formControl]=\"contactForm.controls['phone']\" placeholder=\"Phone*\" class=\"placeholder\" name=\"phone\">\n                  <div class=\"error\" *ngIf=\"contactForm.controls['phone'].hasError('required') &&  contactForm.controls['phone'].touched\">This field is required </div>\n                  <div class=\"error\" *ngIf=\"contactForm.controls['phone'].hasError('pattern') &&  contactForm.controls['phone'].dirty\">Should contain only numeric and starts from 7,8 or 9</div>\n                  <div class=\"error\" *ngIf=\"contactForm.controls['phone'].dirty && !contactForm.controls['phone'].hasError('pattern') && contactForm.controls['phone'].hasError('maxlength')  \">Should contain 10 characters</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"form-field\">\n                  <i class=\"fa fa-pencil\"></i>\n                  <textarea [formControl]=\"contactForm.controls['message']\" class=\"input-message placeholder\" placeholder=\"Comment*\" rows=\"7\"\n                    name=\"message\"></textarea>\n                    <div class=\"messageError\" *ngIf=\"contactForm.controls['message'].hasError('required') &&  contactForm.controls['message'].touched\">This field is required </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-submit mt-10 text-center\">\n              <input type=\"hidden\" name=\"action\" value=\"sendEmail\" />\n              <button id=\"submit\" [ngClass]=\"contactForm.invalid?'disable':''\" name=\"Submit\" type=\"submit\" value=\"Send\" class=\"button\"> Send Message</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--=================================\n  contact -->\n\n<!--=================================\n  contact-map -->\n\n<!--<section class=\"contact-map\">\n  <div class=\"container-fluid\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.017231421863!2d-79.43780268425046!3d36.09306798010035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bae09664ccb%3A0xaa6b8f98d3fb8135!2s220+E+Front+St%2C+Burlington%2C+NC+27215%2C+USA!5e0!3m2!1sen!2sin!4v1475045272926\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\n  </div>\n </section>-->\n\n<!--=================================\n  contact-map -->"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(form, homeService, toastyService, toastyConfig) {
        this.homeService = homeService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.contactForm = form.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[789][0-9]{9}$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10)]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submit = function (value) {
        var _this = this;
        this.homeService.sendContact(value).subscribe(function (data) {
            if (data.statusCode === 200) {
                var toastOptions = {
                    title: "",
                    msg: 'We will contact you soon',
                    showClose: true,
                    timeout: 5000,
                    theme: 'default',
                };
                _this.toastyService.success(toastOptions);
                _this.contactForm.reset();
            }
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */]) === "function" && _d || Object])
], ContactComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"showNavbar\"></app-navbar>\n<router-outlet></router-outlet>\n<hr />\n<app-testimonials></app-testimonials>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, route, homeService) {
        this.router = router;
        this.route = route;
        this.homeService = homeService;
        this.showNavbar = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe((route) => {
        //   debugger;
        var _this = this;
        //   console.log(this.showNavbar);
        // });
        this.subscription = this.homeService.getBoolean().subscribe(function (value) {
            console.log(value);
            _this.showNavbar = value;
        });
        console.log(this.showNavbar);
        if (JSON.parse(localStorage.getItem('phoneNumber'))) {
            this.phoneNo = JSON.parse(localStorage.getItem('phoneNumber')).number;
            if (this.phoneNo !== '') {
                this.homeService.ToggleNavbar(false);
                this.router.navigate(['/home', 'profile']);
            }
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateRouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateRouteGuard = (function () {
    function CanActivateRouteGuard(router) {
        this.router = router;
    }
    CanActivateRouteGuard.prototype.canActivate = function () {
        if (JSON.parse(localStorage.getItem('phoneNumber'))) {
            if (JSON.parse(localStorage.getItem('phoneNumber')).number) {
                this.router.navigate(['/home', 'profile']);
                return true;
            }
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    return CanActivateRouteGuard;
}());
CanActivateRouteGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CanActivateRouteGuard);

var _a;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/home.guards.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commonComponents_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slider_slider_component__ = __webpack_require__("../../../../../src/app/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commonComponents_footer_footer_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sub_of_sub_category_sub_of_sub_category_component__ = __webpack_require__("../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subCategory_subCategory_component__ = __webpack_require__("../../../../../src/app/home/subCategory/subCategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__today_special_menu_today_special_menu_component__ = __webpack_require__("../../../../../src/app/home/today-special-menu/today-special-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/home/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__how_it_works_how_it_works_component__ = __webpack_require__("../../../../../src/app/home/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cart_items_cart_items_component__ = __webpack_require__("../../../../../src/app/home/cart-items/cart-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_guards__ = __webpack_require__("../../../../../src/app/home/home.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_profile_module__ = __webpack_require__("../../../../../src/app/home/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/ng2-bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__commonComponents_login_modal_login_modal_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/login-modal/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__commonComponents_generate_order_modal_generate_order_modal_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/generate-order-modal/generate-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ModalModule } from "ngx-modal";






















var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__today_special_menu_today_special_menu_component__["a" /* TodaySpecialMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__commonComponents_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__commonComponents_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sub_of_sub_category_sub_of_sub_category_component__["a" /* SubOfSubCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__subCategory_subCategory_component__["a" /* SubCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__how_it_works_how_it_works_component__["a" /* HowItWorksComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cart_items_cart_items_component__["a" /* CartItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__commonComponents_login_modal_login_modal_component__["a" /* LoginModalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__commonComponents_generate_order_modal_generate_order_modal_component__["a" /* GenerateOrderModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__home_routes__["a" /* appHomeRoutes */]),
            __WEBPACK_IMPORTED_MODULE_20_ng2_toasty__["b" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_ng2_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19__profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_18__home_guards__["a" /* CanActivateRouteGuard */], __WEBPACK_IMPORTED_MODULE_20_ng2_toasty__["c" /* ToastyService */]]
    })
], HomeModule);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appHomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_slider_component__ = __webpack_require__("../../../../../src/app/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sub_of_sub_category_sub_of_sub_category_component__ = __webpack_require__("../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subCategory_subCategory_component__ = __webpack_require__("../../../../../src/app/home/subCategory/subCategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/home/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_routes__ = __webpack_require__("../../../../../src/app/home/profile/profile.routes.ts");








var appHomeRoutes = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__slider_slider_component__["a" /* SliderComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], children: __WEBPACK_IMPORTED_MODULE_7__profile_profile_routes__["a" /* appProfileRoutes */] },
            { path: ':categoryId', component: __WEBPACK_IMPORTED_MODULE_4__subCategory_subCategory_component__["a" /* SubCategoryComponent */] },
            { path: ':categoryId/:subCategoryId', component: __WEBPACK_IMPORTED_MODULE_3__sub_of_sub_category_sub_of_sub_category_component__["a" /* SubOfSubCategoryComponent */] },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.subjectId = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.navbar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.countValue = 0;
        this.noOfItems = 0;
    }
    HomeService.prototype.sendCount = function (count) {
        this.subject.next(count);
    };
    HomeService.prototype.addCountToCart = function () {
        return this.subject.asObservable();
    };
    HomeService.prototype.sendSubCategoryId = function (id) {
        this.subjectId.next(id);
    };
    HomeService.prototype.getSubCategoryId = function () {
        return this.subjectId.asObservable();
    };
    HomeService.prototype.ToggleNavbar = function (value) {
        // debugger;
        // const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));
        // if(phoneNumber){
        //     if(phoneNumber.number){
        //         return false;
        //     }
        // } else {
        //     return true;
        // }
        this.navbar.next(value);
    };
    HomeService.prototype.getBoolean = function () {
        return this.navbar.asObservable();
    };
    HomeService.prototype.getCategories = function () {
        var body = JSON.stringify({});
        ;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/web/getWebCategory', body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HomeService.prototype.getSubCategories = function (categoryId) {
        var body = JSON.stringify({
            categoryId: categoryId
        });
        ;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/web/getWebSubCategory', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.getSubOfSubCategories = function (subCategoryId) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('subcategoryId', subCategoryId);
        var body = { search: params };
        return this.http.get('http://54.191.54.252:8000/web/getWebProduct', body)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.sendOtpToUser = function (number) {
        var body = JSON.stringify({
            phoneNo: number,
            deviceType: 'WEB'
        });
        ;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/register', body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HomeService.prototype.verifyOtp = function (number, otp) {
        var body = JSON.stringify({
            phoneNo: number,
            otpCode: otp
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/verifyOtp', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.resendOtp = function (number) {
        var body = JSON.stringify({
            phoneNo: number,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/resendOtp', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.addItemToCart = function (id) {
        var authToken = JSON.parse(localStorage.getItem('accessToken'));
        var body = JSON.stringify({
            productId: id
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        headers.append('authorization', "bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/addToCart', body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HomeService.prototype.removeItemFromCart = function (id) {
        var authToken = JSON.parse(localStorage.getItem('accessToken'));
        var body = JSON.stringify({
            productId: id
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        headers.append('authorization', "bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(body);
        return this.http.post('http://54.191.54.252:8000/api/users/removeProduct', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.getCartDetails = function () {
        var authToken = JSON.parse(localStorage.getItem('accessToken'));
        var body = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        headers.append('authorization', "bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/getCartDetails', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.generateOrder = function (data) {
        var authToken = JSON.parse(localStorage.getItem('accessToken'));
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        headers.append('authorization', "bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/generateOrder', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HomeService.prototype.sendContact = function (data) {
        var body = JSON.stringify({
            name: data.name,
            phoneNo: data.phone,
            message: data.message
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://54.191.54.252:8000/api/users/contact', body, options)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/home.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/how-it-works/how-it-works.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.howItWorks-title {\n    text-align: center;\n    color: black;\n    font-weight: bold;\n}\n.howItWorks-title > h1 {\n    font-size: 40px;\n}\n.line {\n    width: 100%;\n    float: left;\n    height: 1px;\n    background: #b6b6b6;\n    margin-top: 10px;\n}\n.knife {\n    width: 40%;\n    margin: 0 auto;\n}\n.arrow .fa-angle-down {\n    display: none;\n}\n@media (min-width: 320px){\n    .knife img {\n        width: 80%;\n    }\n}\n@media (max-width: 991px){\n    .arrow .fa-angle-right {\n        display: none;\n    }\n    .arrow .fa-angle-down {\n        display: block;\n    }\n}\n.gap {\n    width: 100%;\n    float: left;\n    height: 40px;\n}\n.ribbon-left {\n    background: white;\n}\n.work {\n    text-align: center;\n    color: white;\n    font-weight: bold;\n}\n.gap30 {\n    width: 100%;\n    height: 30px;\n}\n.work .heading {\n    color: black;\n    font-weight: bold;\n}\n.work .text {\n    color: #919194;\n    font-weight: lighter;\n    text-align: center;\n    font-size: 15px;\n}\n.arrow .fa {\n    font-size: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/how-it-works/how-it-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"how\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-lg-4\">\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"howItWorks-title col-lg-12 col-xs-12\">\n          <h1>How it works</h1>\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n          <div class=\"row clearfix margin\">\n            <div class=\"col-lg-4 col-xs-4 mar\">\n              <div class=\"line\">\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-xs-4\">\n              <div class=\"knife \">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n                <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n              </div>\n            </div>\n            <div class=\"col-lg-4  col-xs-4\">\n              <div class=\"line\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\"></div>\n    </div>\n    <div class=\"gap\"></div>\n  </div>\n</div>\n<div>\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <div class=\"work col-lg-10 col-md-10 c0l-sm-12 col-xs-12\">\n          <p class=\"icons\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/first.png\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n          </p>\n          <div class=\"gap30\"></div>\n          <p class=\"heading\">\n            Choose a Combo\n          </p>\n          <p class=\"text\">\n            Choice of combos are available for Breakfast, Lunch and Dinner. Select a combo and subscribe in 3 steps.\n          </p>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n          <div class=\"work\">\n            <p class=\"arrow clearfix\">\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <div class=\"work col-lg-10 col-md-10 c0l-sm-12 col-xs-12\">\n          <p class=\"icons\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/second.png\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n          </p>\n          <div class=\"gap30\"></div>\n          <p class=\"heading\">\n            Subscribe and save\n          </p>\n          <p class=\"text\">\n            Subscribe for 3-25 days as per your liking. For trial, we recommend 3 days subscription.\n          </p>\n        </div>\n        <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n          <div class=\"work\">\n            <p class=\"arrow clearfix\">\n              <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <div class=\"work col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <p class=\"icons\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/three.png\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n\n          </p>\n          <div class=\"gap30\"></div>\n          <p class=\"heading\">\n            Bon Appetit!\n          </p>\n          <p class=\"text\">\n            Enjoy fresh and healthy meal everyday. Resubscribe.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"gap\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/how-it-works/how-it-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-how-it-works',
        template: __webpack_require__("../../../../../src/app/home/how-it-works/how-it-works.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/how-it-works/how-it-works.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HowItWorksComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/how-it-works.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-scroll-header { \n    z-index: 1003; \n    position: fixed; \n    width: 100%; \n    -webkit-animation: header 1s; \n            animation: header 1s;\n  }\n  .header {\n      padding-top: 0px !important;\n  }\n@-webkit-keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n@keyframes header {\n    0%{\n      opacity: 0.5;\n    }\n    100%{\n      opacity: 1;\n    }\n}\n.header img{ \n    cursor: pointer; \n    width: 95px; \n}\n.navbar {\n    border-radius: 0px;\n    margin-bottom: 0px !important;\n}\n.navbar-default {\n    border: none;\n    background-color: rgba(113, 79, 75, 0.78) !important;\n}\n.navbar-right{\n    margin: 17px;\n}\n.navbar-brand {\n    margin-left: 20px !important;\n}\n.navbar-default .navbar-nav>li>a {\n    color: white;\n}\n.navbar-default .navbar-nav>li>a:hover {\n    cursor: pointer;\n    background-color: #e93e21;\n    border-radius: 50%;\n}\n.navbar-default .navbar-nav>li>a:focus {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n.active {\n    background-color: #e93e21;\n    color: white !important;\n    border-radius: 50%;\n}\n#cart {\n    width: 32px;\n    position: absolute;\n    right: 9px;\n    top: 6px;\n}\n.dropdown-menu {\n    border-radius: 25px !important;\n    margin-top: 10px !important;\n}\n.navbar-default .navbar-nav>.open>a, \n.navbar-default .navbar-nav>.open>a:focus, \n.navbar-default .navbar-nav>.open>a:hover {\n    background-color: transparent;\n}\n.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {\n    background-color: transparent !important;\n    cursor: pointer;\n    font-weight: bold;\n}\n#send{ \n    display: inline-block; \n    width: 45px; \n    height: 45px; \n    line-height: 45px;\n    text-align: center; \n    z-index: 99; \n    position: absolute;\n    right: 0px;\n    border-left: 1px solid lightgrey;\n    background-color: #e93e21;\n    color: white;\n}\n#login{\n    text-align: center;\n    font-size: 36px;\n    color: #e93e21;\n}\n#verify{\n    display: block;\n    margin: auto;\n}\n#note{\n  text-align: center;\n}\n.disable{\n  opacity: 0.5;\n  cursor: no-drop;\n}\n.error{\n    position: absolute;\n    top: 52px;\n    font-size: 11px;\n    color: red;\n    left: 50%;\n    text-align: center;\n    -webkit-transform: translate(-50% , -50% );\n            transform: translate(-50% , -50% );\n}\n#noOfItems{\n    background-color: #e93e21;\n    color: white;\n    padding: 3px;\n    position: absolute;\n    z-index: 1000;\n    top: 4px;\n    right: 7px;\n    border-radius: 50%;\n}\n.resend {\n    float: right;\n}\n@media screen and (max-width: 767px) {\n    .header {\n        position: fixed;\n        background-color: transparent;\n    }\n    .header img {\n        width: 75px;\n    }\n    .navbar-toggle{\n        margin: 23px;\n        background-color: #e93e21;\n        border: none;\n        margin-right: 58px;\n    }\n    .navbar-default .navbar-toggle .icon-bar {\n        background-color: white;\n    }\n    .navbar-default .navbar-nav>li>a {\n        text-align: center;\n    }\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a {\n        text-align: center;\n        color: white !important;\n    }\n    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n        background-color: #e93e21;\n    }\n    #cart{\n        right: 6px;\n        top: 6px;\n    }\n}\n\n/*@media screen and (max-width: 480px){\n    .navbar{\n        min-height: 73px !important;\n        margin-bottom: 0px !important;\n    }\n}*/\n/*\n@media screen and (min-width: 375px) and (max-width: 415px){\n\n    .navbar{\n        min-height: 100px !important;\n        margin-bottom: 0px !important;\n    }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" [ngClass]=\"{'page-scroll-header': isScrolled}\" class=\"header\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myProfileNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n        <a class=\"navbar-brand\" [routerLink]=\"['../']\"><img [ngClass]=\"{'page-scroll-header-img': isScrolled}\" id=\"logo_img\" src=\"/assets/images/logo.png\" alt=\"logo\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myProfileNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/home/profile']\" href=\"javascript:void(0)\"> Home </a>\n          </li>\n          <li><a style=\"cursor: pointer;\" (click)=\"logout()\">Logout</a></li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Menu&nbsp;<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let category of categories\">\n                <a (click)=\"openMenu(category._id)\">\n                    {{category.name}}\n                </a>\n              </li>\n            </ul>\n          </li>\n          <li><a routerLinkActive=\"active\" href=\"javascript:void(0)\" [routerLink]=\"['./', 'about']\">About us</a>\n          </li>\n          <li><a routerLinkActive=\"active\" href=\"javascript:void(0)\" [routerLink]=\"['./', 'contact']\"> Contact us</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <img (click)=\"goToCartItems()\" id=\"cart\" src=\"/assets/images/shopping_cart.png\"\n  />\n  <p *ngIf=\"existsOrder > 0\" id=\"noOfItems\">{{existsOrder}}</p>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarProfileComponent = (function () {
    function NavbarProfileComponent(homeService, router) {
        var _this = this;
        this.homeService = homeService;
        this.router = router;
        this.changePos = 70;
        this.homeService.getCategories().subscribe(function (data) {
            console.log(data);
            _this.categories = data.data;
        });
    }
    NavbarProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getCartDetails().subscribe(function (items) {
            _this.Orders = items.data;
            _this.existsOrder = _this.Orders.length;
            localStorage.setItem('noOfOrders', JSON.stringify(_this.existsOrder));
        });
        this.homeService.addCountToCart().subscribe(function (data) {
            _this.existsOrder = data + _this.existsOrder;
        });
    };
    NavbarProfileComponent.prototype.fixedHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    NavbarProfileComponent.prototype.logout = function () {
        localStorage.removeItem('phoneNumber');
        this.isLoggedIn = false;
        this.homeService.ToggleNavbar(true);
        this.router.navigate(['../']);
    };
    NavbarProfileComponent.prototype.openMenu = function (id) {
        this.homeService.sendSubCategoryId(id);
        this.router.navigate(['/home/profile', id]);
    };
    NavbarProfileComponent.prototype.goToCartItems = function () {
        this.router.navigate(['/home/profile', 'cartItems']);
    };
    return NavbarProfileComponent;
}());
NavbarProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar-profile',
        template: __webpack_require__("../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.css")],
        host: {
            '(window:scroll)': 'fixedHeader($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarProfileComponent);

var _a, _b;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/navbar-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-profile></app-navbar-profile>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/home/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(homeService) {
        this.homeService = homeService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.homeService.ToggleNavbar(false);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/home/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_profile_navbar_profile_component__ = __webpack_require__("../../../../../src/app/home/profile/navbar-profile/navbar-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_component__ = __webpack_require__("../../../../../src/app/home/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_profile_navbar_profile_component__["a" /* NavbarProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        providers: []
    })
], ProfileModule);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/profile/profile.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appProfileRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_slider_component__ = __webpack_require__("../../../../../src/app/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_of_sub_category_sub_of_sub_category_component__ = __webpack_require__("../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subCategory_subCategory_component__ = __webpack_require__("../../../../../src/app/home/subCategory/subCategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_items_cart_items_component__ = __webpack_require__("../../../../../src/app/home/cart-items/cart-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/home/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/home/about/about.component.ts");







var appProfileRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__slider_slider_component__["a" /* SliderComponent */] },
            { path: 'cartItems', component: __WEBPACK_IMPORTED_MODULE_4__cart_items_cart_items_component__["a" /* CartItemsComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_1__contact_contact_component__["a" /* ContactComponent */] },
            { path: ':categoryId', component: __WEBPACK_IMPORTED_MODULE_3__subCategory_subCategory_component__["a" /* SubCategoryComponent */] },
            { path: ':categoryId/:subCategoryId', component: __WEBPACK_IMPORTED_MODULE_2__sub_of_sub_category_sub_of_sub_category_component__["a" /* SubOfSubCategoryComponent */] },
        ]
        // , canActivateChild: [CanActivateRouteGuard] 
    },
    { path: ':categoryId', component: __WEBPACK_IMPORTED_MODULE_3__subCategory_subCategory_component__["a" /* SubCategoryComponent */] },
    { path: ':categoryId/:subCategoryId', component: __WEBPACK_IMPORTED_MODULE_2__sub_of_sub_category_sub_of_sub_category_component__["a" /* SubOfSubCategoryComponent */] },
];
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/profile.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-inner>.item>a>img, .carousel-inner>.item>img {\n    width: 100%;\n    height: 400px;\n}\n/*@media screen and (max-width: 480px){\n\n    .carousel {\n        top: 77px;\n    }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img src=\"/assets/images/bread_vegetables.jpg\" alt=\"Los Angeles\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"/assets/images/Food-Images.jpg\" alt=\"Chicago\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"/assets/images/event/05.jpg\" alt=\"New York\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<app-today-special-menu></app-today-special-menu>\n<!--<app-how-it-works></app-how-it-works>-->"

/***/ }),

/***/ "../../../../../src/app/home/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/home/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\n    font-size: 21px;\n    position: absolute;\n    bottom: -21px;\n    left: 110px;\n    color: gray;\n}\n.basePrice{\n    color: brown;\n    font-size: 17px;\n}\n#menuTitle {\n    margin-top: 140px;\n}\n#title {\n    font-size: 36px;\n    width: 60%;\n    margin: auto;\n    border-bottom: 1px solid lightgrey;\n    font-family: initial;\n    text-align: center;\n    padding-bottom: 16px;\n}\n#minOrder {\n    display: inline;\n    position: absolute;\n    right: 0px;\n    bottom: -14px;\n}\n@media screen and (max-width: 1199px){\n    .description {\n        left: 127px;\n    }\n}\n@media screen and (max-width: 991px){\n    .description {\n        font-size: 17px;\n        left: 110px;\n    }\n}\n@media screen and (max-width: 767px){\n    #minOrder {\n        font-size: 12px;\n    }\n    .description {\n        font-size: 17px;\n    }\n}\n@media screen and (max-width: 600px){\n    .basePrice {\n        font-size: 14px;\n    }\n    .description {\n        font-size: 14px;\n        bottom: -25px;\n    }\n}\n@media screen and (max-width: 510px){\n    .description {\n        font-size: 12px;\n    }\n}\n@media screen and (max-width: 480px){\n    .menu-body .menu-thumbnail img {\n       float: left;\n    }\n    .menu-body.menu-left .menu-details .price {\n        left: 117px;\n        top: 69px;\n    }\n    .menu-body .menu-details .price {\n        font-size: 16px;\n    }\n    #openSubMenu {\n        margin-left: 16px;\n        font-size: 23px;\n    }\n    .menu-body.menu-left .menu-title {\n        margin-bottom: 12px;\n    }\n    #title {\n        font-size: 30px;\n        width: 50%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .menu-body .addCart #add {\n        top: 0px;\n    }\n    #minOrder {\n        bottom: -3px;\n    }\n    .description {\n        font-size: 12px;\n        bottom: -6px;\n        width: 46%;\n        left: 108px;\n        line-height: 18px;\n    }\n    .basePrice {\n        display: inline-block;\n        margin-left: 8px;\n        font-size: 15px;\n    }\n    .menu-body p {\n        margin-left: 108px;\n        margin-bottom: 0px;\n    }\n    .menu-body.menu-left .menu-title {\n        margin-bottom: 12px;\n        padding-bottom: 9px !important;\n    }\n    .carousel {\n        top: 77px;\n    }\n    .navbar{\n        min-height: 73px !important;\n        margin-bottom: 0px !important;\n    }\n}\n@media screen and (max-width: 400px){\n    #minOrder {\n        font-size: 10px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\nour-menu -->\n\n<div *ngIf=\"!loader\" id=\"loading\">\n  <div id=\"loading-center\">\n    <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n  </div>\n</div>\n<ng2-toasty [position]=\"'top-center'\"></ng2-toasty>\n<section *ngIf=\"loader\" class=\"our-menu page-section-pt parallax pb-30\">\n  <div class=\"row\" style=\"background-size: cover;background-repeat: no-repeat;background-image: url(/assets/images/Food-Images.jpg)\">\n    <div id=\"menuTitle\" class=\"col-lg-12 col-md-12\">\n      <div class=\"section-title text-center\">\n        <div class=\"title-separator\">\n          <div class=\"knife-cart \">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n          </div>\n        </div>\n        <h2> <span class=\"text-orange\">{{subCategoryName}}</span></h2>\n        <ul class=\"page-breadcrumb\">\n          <li><a [routerLink]=\"['../../']\"><i class=\"fa fa-home\"></i> Home</a> <i class=\"fa fa-angle-double-right\"></i></li>\n          <li><a [routerLink]=\"['../']\">{{categoryName}}</a><i class=\"fa fa-angle-double-right\"></i></li>\n          <li><a [routerLink]=\"['./']\">{{subCategoryName}}</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"knife-cart \">\n        <!-- <i class=\"line col-xs-1\"></i> -->\n        <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n        <!-- <i class=\"line col-xs-1\"></i> -->\n      </div>\n      <p id=\"title\">Menu</p>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n  <div class=\"container\" style=\"margin-top: 5%;\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"tabs clearfix\">\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" style=\"display: block;\" class=\"tab-pane fade in\" id=\"tab-1\">\n              <ng-container>\n                <div class=\"row\">\n                  <div *ngFor=\"let subOfsubCategory of subOfSubCategories;let i=index\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"menu-body menu-left\">\n                      <div class=\"menu-thumbnail\">\n                        <img class=\"img-responsive center-block\" [src]=\"subOfsubCategory.imageUrl.thumbnail\" alt=\"\">\n                      </div>\n                      <div class=\"menu-details\">\n                        <div class=\"menu-title clearfix\">\n                          <p>{{subOfsubCategory.productName}}</p>\n                          <span class=\"basePrice\">RS.{{subOfsubCategory.basePriceUnit}}</span>\n                          <h1 class=\"description\">{{subOfsubCategory.description}}</h1>\n                          <div class=\"addCart\">\n                            <!--<a [ngClass]=\"count==0?'disabled':''\" (click)=\"subOfsubCategory.minValue > 2 && removeItem(i)\" id=\"minus\">-</a>\n                        <p id=\"count\">{{subOfsubCategory.minValue}}</p>\n                        <a (click)=\"addItem(i)\" id=\"plus\">+</a>-->\n                            <a (click)=\"addItem(subOfsubCategory._id)\" id=\"add\">ADD</a>\n                            <p id=\"minOrder\"><b>Min Order:</b> {{subOfsubCategory.minValue}}</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-login-modal #childModal [title]=\"'Login'\"></app-login-modal>\n\n<!--=================================\nspecial-menu -->\n<hr />\n<app-today-special-menu></app-today-special-menu>\n<hr />\n<app-how-it-works></app-how-it-works>"

/***/ }),

/***/ "../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubOfSubCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commonComponents_login_modal_login_modal_component__ = __webpack_require__("../../../../../src/app/home/commonComponents/login-modal/login-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubOfSubCategoryComponent = (function () {
    function SubOfSubCategoryComponent(homeService, route, toastyService, toastyConfig) {
        this.homeService = homeService;
        this.route = route;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.toastyConfig.theme = 'material';
    }
    SubOfSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = false;
        this.subCategoryId = this.route.snapshot.params['subCategoryId'];
        this.homeService.getSubOfSubCategories(this.subCategoryId).subscribe(function (data) {
            _this.loader = true;
            _this.subOfSubCategories = data.data;
            _this.categoryName = _this.subOfSubCategories[0].categoryId.name;
            _this.subCategoryName = _this.subOfSubCategories[0].subcategoryId.name;
        });
        if (JSON.parse(localStorage.getItem('phoneNumber'))) {
            this.number = JSON.parse(localStorage.getItem('phoneNumber')).number;
        }
    };
    SubOfSubCategoryComponent.prototype.addItem = function (id) {
        var _this = this;
        if (!this.number) {
            this.childModal.show();
        }
        else {
            this.homeService.addItemToCart(id).subscribe(function (data) {
                if (data.statusCode !== 400) {
                    _this.homeService.sendCount(1);
                    var toastOptions = {
                        title: "",
                        msg: "Added Successfully",
                        showClose: true,
                        timeout: 2000,
                        theme: 'default',
                    };
                    _this.toastyService.success(toastOptions);
                }
            }, function (err) {
                err = err.json();
                {
                    var toastOptions = {
                        title: "",
                        msg: err.message,
                        showClose: true,
                        timeout: 2000,
                        theme: 'default',
                    };
                    _this.toastyService.error(toastOptions);
                }
            });
        }
    };
    return SubOfSubCategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('childModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__commonComponents_login_modal_login_modal_component__["a" /* LoginModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commonComponents_login_modal_login_modal_component__["a" /* LoginModalComponent */]) === "function" && _a || Object)
], SubOfSubCategoryComponent.prototype, "childModal", void 0);
SubOfSubCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sub-of-sub-category',
        template: __webpack_require__("../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/sub-of-sub-category/sub-of-sub-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["a" /* ToastyConfig */]) === "function" && _e || Object])
], SubOfSubCategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/sub-of-sub-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/subCategory/subCategory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#openSubMenu{\n    position: absolute;\n    font-size: 27px;\n    color: black;\n    font-family: fantasy;\n}\n#menuTitle {\n    margin-top: 140px;\n}\n#title {\n    width: 60%;\n    margin: auto;\n    font-size: 36px;\n    border-bottom: 1px solid lightgrey;\n    font-family: initial;\n    text-align: center;\n    padding-bottom: 16px;\n}\n@media screen and (max-width: 480px){\n    .menu-body .menu-thumbnail img {\n       float: left;\n    }\n    .menu-body.menu-left .menu-details .price {\n    float: right;\n    color: #e93e21;\n    left: 117px;\n    top: 69px;\n    position: absolute;\n}\n.menu-body .menu-details .price {\n    font-size: 16px;\n}\n#openSubMenu {\n    margin-left: 16px;\n    font-size: 23px;\n}\n.menu-body.menu-left .menu-title {\n    margin-bottom: 12px;\n    padding-bottom: 10px !important;\n}\n#title {\n    font-size: 30px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n\n@media screen and (max-width: 991px) {\n    #title {\n    font-size: 30px;\n    width: 31%;\n    margin-left: auto;\n    margin-right: auto;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/subCategory/subCategory.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\nour-menu -->\n\n<div *ngIf=\"!loader\" id=\"loading\">\n  <div id=\"loading-center\">\n    <img src=\"/assets/images/ajax-loader.gif\" alt=\"\">\n  </div>\n</div>\n\n<section *ngIf=\"loader\" class=\"our-menu page-section-pt parallax pb-30\">\n  <div style=\"background-image: url(/assets/images/bread_vegetables.jpg);background-size: cover;background-repeat: no-repeat;\"\n    class=\"row\">\n    <div id=\"menuTitle\" class=\"col-lg-12 col-md-12\">\n      <div class=\"section-title text-center\">\n        <div class=\"title-separator\">\n          <div class=\"knife-cart \">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n            <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n            <!-- <i class=\"line col-xs-1\"></i> -->\n          </div>\n        </div>\n        <h2> <span class=\"text-orange\">{{subCategoryName}} </span></h2>\n        <ul class=\"page-breadcrumb\">\n          <li><a [routerLink]=\"['../']\"><i class=\"fa fa-home\"></i> Home</a> <i class=\"fa fa-angle-double-right\"></i></li>\n          <li><a [routerLink]=\"['./']\">{{subCategoryName}}</a></li>\n        </ul>\n      </div>\n    </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"knife-cart \">\n          <!-- <i class=\"line col-xs-1\"></i> -->\n          <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n          <!-- <i class=\"line col-xs-1\"></i> -->\n        </div>\n        <p id=\"title\">Menu</p>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n    <div class=\"container\" style=\"margin-top: 7%;\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"tabs clearfix\">\n\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" style=\"display: block;\" class=\"tab-pane fade in\" id=\"tab-1\">\n                <ng-container *ngIf=\"subCategories && subCategories.length!==0\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let subCategory of subCategories\" class=\"col-lg-6 col-md-6 col-sm-6\">\n                      <div class=\"menu-body menu-left\">\n                        <div class=\"menu-thumbnail\">\n                          <img class=\"img-responsive center-block\" [src]=\"subCategory.subCategoryImage.thumbnail\" alt=\"\">\n                        </div>\n                        <div class=\"menu-details\">\n                          <div class=\"menu-title clearfix\">\n                            <a id=\"openSubMenu\" href=\"javascript(0):void\" [routerLink]=\"['./', subCategory._id]\">{{subCategory.name}}</a>\n                            <span class=\"price\">{{subCategory.description}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n                <div id=\"noItemContent\" *ngIf='subCategories && subCategories.length===0' class=\"\">\n                  <p>There are no items</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</section>\n\n<!--=================================\nspecial-menu -->\n<hr />\n<app-today-special-menu></app-today-special-menu>\n<hr />\n<app-how-it-works></app-how-it-works>"

/***/ }),

/***/ "../../../../../src/app/home/subCategory/subCategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubCategoryComponent = (function () {
    function SubCategoryComponent(router, homeService, route) {
        this.router = router;
        this.homeService = homeService;
        this.route = route;
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urlChange = this.route.params.subscribe(function (params) {
            _this.loader = false;
            var categoryId = params['categoryId'];
            _this.homeService.getSubCategories(categoryId).subscribe(function (result) {
                _this.loader = true;
                _this.subCategories = result.data;
                if (_this.subCategories.length > 0) {
                    _this.subCategoryName = _this.subCategories[0].categoryId.name;
                }
            });
        });
    };
    return SubCategoryComponent;
}());
SubCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-subCategory',
        template: __webpack_require__("../../../../../src/app/home/subCategory/subCategory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/subCategory/subCategory.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SubCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/subCategory.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/testimonials/testimonials.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\ntestimonials -->\n\n<section class=\"testimonials\">\n  <div class=\"object-bottom-top\">\n    <div class=\"object-right\">\n      <img class=\"img-responsive\" src=\"/assets/images/object/05.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"page-section-ptb\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"section-title text-center\">\n            <div class=\"title-separator\">\n              <div class=\"knife-test\">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n                <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n              </div>\n            </div>\n            <h2> <span class=\"text-orange\">Our </span> testimonials</h2>\n            <p>What Our Happy Clients say about us</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4\">\n          <div class=\"testimonial-block left\">\n            <div class=\"testimonial-avatar\">\n              <img src=\"/assets/images/team/01.jpg\" alt=\"\">\n            </div>\n            <div class=\"testimonial-info clearfix\">\n              <strong>Alice Williams</strong>\n              <span>Head Chef </span>\n              <p>Success isn’t really that difficult. There is a significant portion of the population here in North America,\n                that actually want and need success really no magic to be hard. </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n          <div class=\"testimonial-block left\">\n            <div class=\"testimonial-avatar\">\n              <img src=\"/assets/images/team/02.jpg\" alt=\"\">\n            </div>\n            <div class=\"testimonial-info clearfix\">\n              <strong>Anne Smith </strong>\n              <span>kitchen Manager</span>\n              <p>For those of you who are serious about having more, doing more, giving more and being more, success is achievable\n                with some understanding of what to do, discipline. </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n          <div class=\"testimonial-block left\">\n            <div class=\"testimonial-avatar\">\n              <img src=\"/assets/images/team/03.jpg\" alt=\"\">\n            </div>\n            <div class=\"testimonial-info clearfix\">\n              <strong>Felica Queen </strong>\n              <span>Head Waiter </span>\n              <p>He first thing to remember about success is that it is a process – nothing more, nothing less. There is really\n                no magic to it and it’s not reserved only few people. </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--=================================\ntestimonials -->"

/***/ }),

/***/ "../../../../../src/app/home/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    return TestimonialsComponent;
}());
TestimonialsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-testimonials',
        template: __webpack_require__("../../../../../src/app/home/testimonials/testimonials.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/testimonials/testimonials.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestimonialsComponent);

//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/testimonials.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/today-special-menu/today-special-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#imageOfFood{\n    -webkit-animation: image 5s;\n            animation: image 5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n.menu:hover {\n    cursor: pointer;\n}\n.menuImage > img {\n    width: 225px;\n    border-radius: 50%;\n    display: block;\n    margin: auto;\n    -webkit-animation: image 5s;\n            animation: image 5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n@-webkit-keyframes image {\n    0% {\n        -webkit-transform: rotateZ(0deg);\n                transform: rotateZ(0deg);\n        opacity: 0.5;\n    }\n    100% {\n        -webkit-transform: rotateZ(360deg);\n                transform: rotateZ(360deg);\n        opacity: 1;\n    }\n}\n@keyframes image {\n    0% {\n        -webkit-transform: rotateZ(0deg);\n                transform: rotateZ(0deg);\n        opacity: 0.5;\n    }\n    100% {\n        -webkit-transform: rotateZ(360deg);\n                transform: rotateZ(360deg);\n        opacity: 1;\n    }\n}\n.menuName {\n    text-align: center;\n    margin-top: 20px;\n}\n.menuName > p {\n    font-size: 18px;\n    font-family: cursive;\n    color: brown;\n    -webkit-animation: menuName 4s;\n            animation: menuName 4s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n@-webkit-keyframes menuName {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes menuName {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n#name{\n    -webkit-animation: name 5s;\n            animation: name 5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n\n#priceOfFood{\n    -webkit-animation: price 4s;\n            animation: price 4s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n@-webkit-keyframes price {\n    0% {\n        opacity: 0;\n    }\n    100% {\n\n        opacity: 1;\n    }\n}\n@keyframes price {\n    0% {\n        opacity: 0;\n    }\n    100% {\n\n        opacity: 1;\n    }\n}\n\n@media screen and (max-width: 400px){\n    .section-title h2 {\n        font-size: 17px;\n    }\n    .menuImage img {\n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/today-special-menu/today-special-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\nspecial-menu -->\n<section class=\"slider\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <div class=\"section-title text-center\">\n        <div class=\"title-separator\">\n          <div class=\"knife \">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n                <img src=\"/assets/images/knife.png\" class=\"img-responsive\">\n                <!-- <i class=\"line col-xs-1\"></i> -->\n              </div>\n        </div>\n        <h2 class=\"text-white\"> <span class=\"text-orange\">Our Today’s</span> Special Menu</h2>\n        <p class=\"text-white\">We serve a daily changing menu</p>\n      </div>\n    </div>\n  </div>\n  <!--<div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"menu\">\n        <div class=\"menuImage\">\n          <img src=\"/assets/images/profileThumb_1500732070149.jpg\" />\n        </div>\n        <div class=\"menuName\">\n          <p>Weekly/ Daily Meals</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"menu\">\n        <div class=\"menuImage\">\n          <img src=\"/assets/images/profileThumb_1500657457745.jpg\" />\n        </div>\n        <div class=\"menuName\">\n          <p>Breakfast</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"menu\">\n        <div class=\"menuImage\">\n          <img src=\"/assets/images/profileThumb_1500732722109.jpg\" />\n        </div>\n        <div class=\"menuName\">\n          <p>Kids Menu</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"menu\">\n        <div class=\"menuImage\">\n          <img src=\"/assets/images/profileThumb_1500733156363.jpg\" />\n        </div>\n        <div class=\"menuName\">\n          <p>Night Food Card</p>\n        </div>\n      </div>\n    </div>\n  </div>-->\n  <div class=\"row\">\n    <div *ngFor=\"let category of categories;let i=index\" class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3\">\n      <div *ngIf=\"i<=3\" (click)=\"goToMenu(category._id)\" class=\"menu\">\n        <div class=\"menuImage\">\n          <img [src]=\"category.categoryImage.thumbnail\" />\n        </div>\n        <div class=\"menuName\">\n          <p>{{category.name}}</p>\n        </div>\n      </div>\n    </div>\n  </div>  \n\n\n\n</section>\n<!--=================================\nspecial-menu -->"

/***/ }),

/***/ "../../../../../src/app/home/today-special-menu/today-special-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodaySpecialMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodaySpecialMenuComponent = (function () {
    function TodaySpecialMenuComponent(homeService, router) {
        this.homeService = homeService;
        this.router = router;
    }
    TodaySpecialMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getCategories().subscribe(function (categories) {
            _this.categories = categories.data;
            console.log(_this.categories);
        });
    };
    TodaySpecialMenuComponent.prototype.goToMenu = function (id) {
        if (JSON.parse(localStorage.getItem('phoneNumber'))) {
            var phoneNo = JSON.parse(localStorage.getItem('phoneNumber')).number;
            if (phoneNo) {
                this.router.navigate(['/home', 'profile', id]);
            }
        }
        else {
            this.router.navigate(['/home', id]);
        }
    };
    return TodaySpecialMenuComponent;
}());
TodaySpecialMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-today-special-menu',
        template: __webpack_require__("../../../../../src/app/home/today-special-menu/today-special-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/today-special-menu/today-special-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TodaySpecialMenuComponent);

var _a, _b;
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/today-special-menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/admin-nk/Desktop/AmHungry/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map