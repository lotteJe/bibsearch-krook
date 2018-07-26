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

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <!-- <mat-icon>book</mat-icon>Zoeken in de catalogus    -->\n      <mat-icon>book</mat-icon> ZOEKEN IN DE CATALOGUS </ng-template>\n    <form novalidate class=\"content content-test-form\" #form=\"ngForm\" (ngSubmit)=\"form.valid && submitForm(form)\">\n      <section class=\"row\">\n        <div class=\"col\">\n          <mat-input-container>\n            <input matInput matKeyboard placeholder=\"Zoekterm\" name=\"zoekterm\" [(ngModel)]=\"zoekValue\" (enterClick)=\"submitForm(form)\">\n          </mat-input-container>\n        </div>\n      </section>\n      <section class=\"row\">\n        <button mat-raised-button type=\"submit\" aria-label=\"Submit form\">\n          ZOEKEN\n        </button>\n      </section>\n    </form>\n    <div>\n      <div *ngIf=\"resultaten.length > 0 as value; else noResult\">\n        <div class=\"row\">\n          <div *ngFor=\"let resultaat of resultaten\" class=\"col\">\n            <mat-card class=\"example-card\">\n              <mat-card-header>\n                <mat-card-title class=\"title\">{{resultaat.titles.title.replace('amp;', '')}}</mat-card-title>\n                <mat-card-subtitle class=\"subtitle\" *ngIf=\"isUndefined(resultaat.authors) as value; else elseBlock\">\n                </mat-card-subtitle>\n                <ng-template #elseBlock>\n                  <mat-card-subtitle>\n                    {{ resultaat.authors['main-author']}}\n                  </mat-card-subtitle>\n                </ng-template>\n              </mat-card-header>\n              <img mat-card-image src=\"assets/noresult.png\" alt=\"Photo of a Shiba Inu\">\n              <mat-card-content>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus imperdiet, lobortis diam ac, luctus neque. Pellentesque\n                  habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam massa tortor,\n                  interdum vitae nisi a, sagittis semper risus.\n                </p>\n              </mat-card-content>\n              <mat-card-actions>\n                <a href=\"{{resultaat['detail-page']}}\" target=\"_blank\" mat-button>MEER INFO</a>\n              </mat-card-actions>\n              <div *ngIf=\"isArray(resultaat.types.type) as value; else elseBlockT\">\n                <mat-chip-list>\n                  <mat-chip *ngFor=\"let t of resultaat.types.type\" selected=\"true\" color=\"warn\">{{t}}</mat-chip>\n                </mat-chip-list>\n              </div>\n              <ng-template #elseBlockT>\n                <div>\n                  <mat-chip-list>\n                    <mat-chip selected=\"true\" color=\"warn\"> {{resultaat.types.type}}\n                    </mat-chip>\n                  </mat-chip-list>\n                </div>\n              </ng-template>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n      <ng-template #noResult>\n        <div *ngIf=\"!first\">\n          <img class=\"noresult\" src=\"assets/noresultTextDown.png\">\n        </div>\n      </ng-template>\n    </div>\n    <div>\n      <div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 40px 32px; }\n\n.row {\n  align-items: flex-end;\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  padding: 8px; }\n\n.content-test-form .row:last-of-type > .col:last-of-type {\n    align-self: flex-start;\n    padding-top: 8px; }\n\n.col {\n  position: relative; }\n\n.col > .mat-input-container {\n    display: block; }\n\n.mat-raised-button {\n  width: 100%; }\n\n.mat-select + .mat-raised-button {\n    margin-top: 24px; }\n\n.mat-select {\n  display: block; }\n\npre {\n  background-color: #e0e0e0;\n  border-radius: 3px;\n  display: block;\n  font: 11px/1.5 Monospaced, monospace;\n  margin: 8px 0;\n  min-height: 16px;\n  padding: 4px 8px;\n  white-space: normal; }\n\n.card {\n  max-width: 400px; }\n\n.example-card {\n  max-width: 400px; }\n\n.noresult {\n  max-width: 70%;\n  display: block;\n  margin: auto; }\n"

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




var parser = __webpack_require__(/*! fast-xml-parser */ "./node_modules/fast-xml-parser/src/parser.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_keyboardService, locale, _layouts, _http) {
        this._keyboardService = _keyboardService;
        this.locale = locale;
        this._layouts = _layouts;
        this._http = _http;
        this.first = true;
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
                else
                    _this.resultaten.length = 0;
                // console.log(jsonObj);
            });
        }
        this.first = false;
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
    AppComponent.prototype.isArray = function (obj) {
        return Array.isArray(obj);
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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
















var customLyouts = __assign({}, _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_13__["keyboardLayouts"], { 'Tolles Layout': {
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
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ],
            imports: [
                // Angular modules
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // Material modules
                _material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_13__["MatKeyboardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"]
            ],
            providers: [
                { provide: _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_13__["MAT_KEYBOARD_LAYOUTS"], useValue: customLyouts },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'nl-BE' }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
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