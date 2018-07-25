(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <!-- <mat-icon>book</mat-icon>Zoeken in de catalogus    -->\n      <mat-icon>book</mat-icon> ZOEKEN IN DE CATALOGUS </ng-template>\n    <form novalidate class=\"content content-test-form\" #form=\"ngForm\" (ngSubmit)=\"form.valid && submitForm(form)\">\n      <section class=\"row\">\n        <div class=\"col\">\n          <mat-input-container>\n            <input matInput matKeyboard placeholder=\"Zoekterm\" name=\"zoekterm\" [(ngModel)]=\"zoekValue\" (enterClick)=\"submitForm(form)\">\n          </mat-input-container>\n        </div>\n      </section>\n      <section class=\"row\">\n        <button mat-raised-button type=\"submit\" aria-label=\"Submit form\">\n          ZOEKEN\n        </button>\n      </section>\n    </form>\n    <div>\n      <div *ngIf=\"resultaten\">\n        <div class=\"row\">\n          <div *ngFor=\"let resultaat of resultaten\" class=\"col\">\n            <mat-card class=\"card\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>{{resultaat.titles.title}}</mat-card-title>\n                <mat-card-subtitle *ngIf=\"isUndefined(resultaat.authors) as value; else elseBlock\">\n                </mat-card-subtitle>\n                <ng-template #elseBlock>\n                  {{ resultaat.authors['main-author']}}\n                </ng-template>\n              </mat-card-header>\n              <!--  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n              <mat-card-actions>\n                <a href=\"{{resultaat['detail-page']}}\" target=\"_blank\" mat-button>MEER INFO</a>\n                <!-- <button mat-button>SHARE</button> -->\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 40px 32px; }\n\n.row {\n  align-items: flex-end;\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  padding: 8px; }\n\n.content-test-form .row:last-of-type > .col:last-of-type {\n    align-self: flex-start;\n    padding-top: 8px; }\n\n.col {\n  position: relative; }\n\n.col > .mat-input-container {\n    display: block; }\n\n.mat-raised-button {\n  width: 100%; }\n\n.mat-select + .mat-raised-button {\n    margin-top: 24px; }\n\n.mat-select {\n  display: block; }\n\npre {\n  background-color: #e0e0e0;\n  border-radius: 3px;\n  display: block;\n  font: 11px/1.5 Monospaced, monospace;\n  margin: 8px 0;\n  min-height: 16px;\n  padding: 4px 8px;\n  white-space: normal; }\n\n.card {\n  max-width: 400px;\n  height: 150px; }\n\n.example-header-image {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//import { MatSlideToggleChange } from '@angular/material/slide-toggle';



var parser = __webpack_require__(/*! fast-xml-parser */ "./node_modules/fast-xml-parser/src/parser.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_keyboardService, locale, _layouts, _http) {
        this._keyboardService = _keyboardService;
        this.locale = locale;
        this._layouts = _layouts;
        this._http = _http;
        this.resultaten = [];
        this.zoekValue = '';
    }
    Object.defineProperty(AppComponent.prototype, "zoekterm", {
        get: function () {
            return this._zoekterm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "keyboardVisible", {
        get: function () {
            return this._keyboardService.isOpened;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defaultLocale = (" " + this.locale).slice(1);
        this.layouts = Object
            .keys(this._layouts)
            .map(function (name) { return ({
            name: name,
            layout: _this._layouts[name]
        }); })
            .sort(function (a, b) { return a.layout.name.localeCompare(b.layout.name); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.closeCurrentKeyboard();
    };
    AppComponent.prototype.submitForm = function (form) {
        var _this = this;
        var temp = form.controls["zoekterm"].value;
        this._zoekterm = temp.replace(/\s/g, "%20");
        if (typeof this._zoekterm !== "undefined") {
            var url = 'https://cataloguswebservices.bibliotheek.be/wetteren/search/?q=' + this._zoekterm + '&authorization=b8157a8a17c57162b1c9d8096c5f3620';
            console.log(url);
            this._http.get(url, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Content-Type', 'text/xml')
                    .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
                    .append('Access-Control-Allow-Origin', '*')
                    .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
                responseType: 'text'
            })
                .subscribe(function (response) {
                var jsonObj = parser.parse(response);
                if (jsonObj.aquabrowser.results !== undefined)
                    _this.resultaten = jsonObj.aquabrowser.results.result;
                console.log(jsonObj);
            });
        }
    };
    AppComponent.prototype.isUndefined = function (authors) {
        return (typeof authors === "undefined");
    };
    AppComponent.prototype.openKeyboard = function (locale) {
        var _this = this;
        if (locale === void 0) { locale = this.defaultLocale; }
        this._keyboardRef = this._keyboardService.open(locale, {
            darkTheme: this.darkTheme,
            duration: this.duration,
            isDebug: this.isDebug
        });
        this._enterSubscription = this._keyboardRef.instance.enterClick.subscribe(function () {
            _this.submitForm();
        });
    };
    AppComponent.prototype.closeCurrentKeyboard = function () {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
        if (this._enterSubscription) {
            this._enterSubscription.unsubscribe();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_1__["MAT_KEYBOARD_LAYOUTS"])),
        __metadata("design:paramtypes", [_ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_1__["MatKeyboardService"], Object, Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var customLyouts = __assign({}, _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_12__["keyboardLayouts"], { 'Tolles Layout': {
        'name': 'Awesome layout',
        'keys': [
            [
                ['1', '!'],
                ['2', '@'],
                ['3', '#']
            ]
        ],
        'lang': ['de-CH']
    } });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
            ],
            imports: [
                // Angular modules
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // Material modules
                _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_12__["MatKeyboardModule"]
            ],
            providers: [
                { provide: _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_12__["MAT_KEYBOARD_LAYOUTS"], useValue: customLyouts },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'nl-BE' }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lottejespers/Documenten/bibsearchHeroku/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map