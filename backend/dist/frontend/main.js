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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _create_post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-post/post-details/post-details.component */ "./src/app/create-post/post-details/post-details.component.ts");
/* harmony import */ var _app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");



// components





// AuthGuard

var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'createpost', component: _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'postdetails', component: _create_post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_7__["PostDetailsComponent"], canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Mean-Stack';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _create_post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-post/post-details/post-details.component */ "./src/app/create-post/post-details/post-details.component.ts");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-service.service */ "./src/app/auth/auth-service.service.ts");




// custom modules


// components







// services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_10__["CreatePostComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _create_post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__["PostDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_13__["AuthServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-service.service.ts ***!
  \**********************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");


// manually defined imports




var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.$auth = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.checkLogin());
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        if (this.checkLogin()) {
            this.userSubject.next(new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]().decodeToken(this.checkLogin()));
        }
    }
    Object.defineProperty(AuthServiceService.prototype, "user", {
        get: function () {
            return this.userSubject;
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceService.prototype.checkLogin = function () {
        return localStorage.getItem('token');
    };
    AuthServiceService.prototype.login = function (credentials) {
        return this._http.post('api/authenticate', credentials);
    };
    AuthServiceService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthServiceService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.$auth.next(this.checkLogin());
        this._router.navigate(['/login']);
    };
    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth/auth-service.service.ts");



// Authservice

var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this._authService.checkLogin()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var BlogService = /** @class */ (function () {
    function BlogService(_http) {
        this._http = _http;
    }
    BlogService.prototype.getallblogs = function () {
        return this._http.get('post/getallblogs');
    };
    BlogService.prototype.deletepost = function (_id) {
        return this._http.delete('post/deletepost' + ("/" + _id));
    };
    BlogService.prototype.likePost = function (_id) {
        return this._http.put('post/likeBlog' + ("/" + _id), {});
    };
    BlogService.prototype.addComment = function (_id, comment) {
        return this._http.post('post/Comment' + ("/" + _id), { comment: comment });
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/create-post/create-post.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-post/create-post.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input textarea{\r\n    font-weight:bold;\r\n    font-family: sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQgdGV4dGFyZWF7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-post/create-post.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-post/create-post.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <form [formGroup]=\"titleForm\" (ngSubmit)=\"post()\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        ■ Post Title\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <input type=\"text\" formControlName=\"title\" class=\"form-control input-group mb-2\"\r\n          placeholder=\"Enter the post title here!\">\r\n        <div *ngIf=\"titleForm.get('title').invalid && titleForm.get('title').touched\">\r\n          <div *ngIf=\"titleForm.get('title').errors.required\">*Please enter a title</div>\r\n          <div *ngIf=\"titleForm.get('title').errors.minlength\">*Please enter minimun 5 characters</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        ■ Post Description\r\n      </div>\r\n      <div class=\"input-group\">\r\n        <div class=\"card-body\">\r\n          <textarea class=\"form-control input-group mb-7\" formControlName=\"description\" aria-label=\"With textarea\"\r\n            placeholder=\"Enter a decsription here!\"></textarea>\r\n          <div *ngIf=\"titleForm.get('description').invalid && titleForm.get('description').touched\">\r\n            <div *ngIf=\"titleForm.get('description').errors.required\">*Please enter a description</div>\r\n            <div *ngIf=\"titleForm.get('description').errors.minlength\">*Please enter minimun 5 characters</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <button class=\"btn btn-primary\" [disabled]=\"titleForm.invalid\">POST</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/create-post/create-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-post/create-post.component.ts ***!
  \******************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth-service.service */ "./src/app/auth/auth-service.service.ts");






var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(_fb, _http, _router, _authService) {
        this._fb = _fb;
        this._http = _http;
        this._router = _router;
        this._authService = _authService;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleForm = this._fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]]
        });
        this._authService.user.subscribe(function (data) { return _this.user = data; });
    };
    CreatePostComponent.prototype.post = function () {
        var _this = this;
        this._http.post('post/createpost', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.titleForm.value, this.user)).subscribe(function () {
            alert('successfully posted!');
            _this._router.navigate(['/postdetails']);
        }, function () {
            console.log('error occured while posting!');
        });
    };
    CreatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/create-post/create-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/create-post/post-details/post-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/create-post/post-details/post-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    display: inline-block;\r\n    padding: .400rem .75rem;\r\n    vertical-align: unset;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBvc3QvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcG9zdC9wb3N0LWRldGFpbHMvcG9zdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuNDAwcmVtIC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/create-post/post-details/post-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/create-post/post-details/post-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\r\n  <br>\r\n  <div class=\"dropdown\">\r\n    <button [routerLink]=\"['/createpost']\" class=\"btn btn-primary btn-md\"><i class=\"fas fa-plus-circle\"></i>&nbsp;New\r\n      Post</button></div>\r\n  <br>\r\n  <div class=\"panel panel-success\" *ngFor=\"let blog of blogPosts\">\r\n    <!-- post component input = blog -->\r\n    <div class=\"card card-body\">\r\n      <div class=\"card-heading\">\r\n        <h3 class=\"card-title\">{{ blog.title }}</h3>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        {{ blog.description }}\r\n      </div>\r\n      <div class='alert alert-primary'>\r\n        Created by: <strong>{{blog.createdBy == (_authService.user | async)?.name ? \"You\" : blog.createdBy }}</strong>\r\n      </div>\r\n\r\n      <div>\r\n        <button (click)=\"likePost(blog._id)\" class=\"btn btn-primary\"><i class=\"fas fa-thumbs-up\"></i>&nbsp;Like\r\n          {{ blog.like }}</button>\r\n        <button (click)=\"showComment = blog._id\" class=\"btn btn-success\"><i\r\n            class=\"fas fa-comment-dots\"></i>&nbsp;Comments</button>\r\n        <button (click)=\"deletePost(blog._id)\" class=\"btn btn-danger\"><i\r\n            class=\"fas fa-trash-alt\"></i>&nbsp;Delete</button>\r\n      </div>\r\n      <br>\r\n      <div *ngIf=\"showComment == blog._id\">\r\n\r\n        <input type=\"text\" style=\"display:inline;\" class=\"form-control col-5\" #commentvalue placeholder=\"Add new comment!\">\r\n       <span><button (click)=\"addComment(blog._id, commentvalue)\" class=\"btn btn-success\">post</button></span>\r\n\r\n        <div *ngFor=\"let item of blog.comment\">\r\n          <div class=\"alert alert-warning\">{{item}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-post/post-details/post-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-post/post-details/post-details.component.ts ***!
  \********************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth-service.service */ "./src/app/auth/auth-service.service.ts");
/* harmony import */ var _auth_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/blog.service */ "./src/app/auth/blog.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// manually defined




var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(_blogService, _authService) {
        this._blogService = _blogService;
        this._authService = _authService;
        this.blogPosts = [];
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        this.getblogs();
    };
    PostDetailsComponent.prototype.getblogs = function () {
        var _this = this;
        this._blogService.getallblogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    PostDetailsComponent.prototype.deletePost = function (_id) {
        var _this = this;
        this._blogService.deletepost(_id).subscribe(function (data) {
            data = _this.getblogs();
        });
    };
    PostDetailsComponent.prototype.likePost = function (_id) {
        var _this = this;
        this._blogService
            .likePost(_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (doc) { return _this._blogService.getallblogs(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (blogs) { return blogs['blogs']; })).subscribe(function (blogs) {
            _this.blogPosts = blogs;
        });
    };
    PostDetailsComponent.prototype.addComment = function (_id, commentvalue) {
        var _this = this;
        // console.log( commentvalue.value);
        this._blogService.addComment(_id, commentvalue.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (doc) { return _this._blogService.getallblogs(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (blogs) { return blogs['blogs']; })).subscribe(function (blogs) {
            _this.blogPosts = blogs;
        });
    };
    PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-details',
            template: __webpack_require__(/*! ./post-details.component.html */ "./src/app/create-post/post-details/post-details.component.html"),
            styles: [__webpack_require__(/*! ./post-details.component.css */ "./src/app/create-post/post-details/post-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginform {\r\n  width: 400px;\r\n    margin: 50px auto;\r\n    border-radius: 3px;\r\n}\r\n  .loginform form {\r\n    margin-bottom: 15px;\r\n      background: #f7f7f7;\r\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n      padding: 30px;\r\n  }\r\n  .login-form h2 {\r\n      margin: 0 0 15px;\r\n  }\r\n  .form-control, .btn {\r\n      min-height: 38px;\r\n      border-radius: 2px;\r\n  }\r\n  .btn {        \r\n      font-size: 15px;\r\n      font-weight: bold;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0VBQ0M7SUFDRSxvQkFBb0I7TUFDbEIsb0JBQW9CO01BQ3BCLDJDQUEyQztNQUMzQyxjQUFjO0dBQ2pCO0VBQ0E7TUFDRyxpQkFBaUI7R0FDcEI7RUFDRDtNQUNJLGlCQUFpQjtNQUNqQixtQkFBbUI7R0FDdEI7RUFDRDtNQUNJLGdCQUFnQjtNQUNoQixrQkFBa0I7R0FDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luZm9ybSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuICAubG9naW5mb3JtIGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICAgLmxvZ2luLWZvcm0gaDIge1xyXG4gICAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLCAuYnRuIHtcclxuICAgICAgbWluLWhlaWdodDogMzhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH0gXHJcbiAgLmJ0biB7ICAgICAgICBcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginform\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\">\r\n        <h2 class=\"text-center\">LOGIN</h2>\r\n        <br>\r\n        <div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\r\n            <div *ngIf=\"!loginForm.get('name').valid && loginForm.get('name').touched\">\r\n                <div *ngIf=\"loginForm.get('name').errors.required\">*Name is required!</div>\r\n                <div *ngIf=\"loginForm.get('name').errors.minlength\">*Should be 5 characters long!</div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\r\n            <div *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\r\n                <div *ngIf=\"loginForm.get('password').errors.required\">*Password is required!</div>\r\n                <div *ngIf=\"loginForm.get('password').errors.minlength\">*Should be 5 characters long!</div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"loginForm.invalid\">Login</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth-service.service */ "./src/app/auth/auth-service.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");


// manually defined imports





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, _http, _authService, _router) {
        this._fb = _fb;
        this._http = _http;
        this._authService = _authService;
        this._router = _router;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._authService.login(this.loginForm.value).subscribe(function (data) {
            _this._authService.user.next(_this.helper.decodeToken(data['token']));
            _this._authService.$auth.next('token');
            _this._authService.setToken(data['token']);
            _this._router.navigate(['/createpost']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn.btn-primary{\r\n\r\n    display: inline-block;\r\n    padding: 5px 15px;\r\n    background-color: #007BFF;\r\n    color: white;\r\n    outline: none;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7O0NBRXJCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi5idG4tcHJpbWFyeXtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-dark\">\r\n  <span class=\"navbar-brand mb-2 h1 text-light\">Assessment</span>\r\n  <div class=\"links\">\r\n    <button [routerLink]=\"['/register']\" [hidden]=\"navUpdate\" class=\"btn btn-primary\">Register</button>\r\n    <button [routerLink]=\"['/login']\"[hidden]=\"navUpdate\" class=\"btn btn-primary\">Login</button>\r\n    <button [routerLink]=\"['/home']\" *ngIf=\"navUpdate\" class=\"btn btn-primary\">Home</button>\r\n    <button [routerLink]=\"['/createpost']\" *ngIf=\"navUpdate\" class=\"btn btn-primary\">Create Posts</button>\r\n    <button [routerLink]=\"['/postdetails']\" *ngIf=\"navUpdate\" class=\"btn btn-primary\">Post Details</button>\r\n\r\n    <button (click)=\"logout()\" class=\"btn btn-danger\">Logout</button>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth-service.service */ "./src/app/auth/auth-service.service.ts");


// manually defined imports

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authService) {
        this._authService = _authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.$auth.subscribe(function (data) {
            _this.navUpdate = data;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  \r\n  body{\r\n    color: #fff;\r\n    background: #63738a;\r\n    font-family: sans-serif;\r\n}\r\n.form-control{\r\n    height: 40px;\r\n    box-shadow: none;\r\n    color: #969fa4;\r\n}\r\n.form-control:focus{\r\n    border-color: lightseagreen;\r\n}\r\n.form-control, .btn{        \r\n    border-radius: 3px;\r\n}\r\n.signup-form{\r\n    width: 400px;\r\n    margin: 0 auto;\r\n    padding: 30px 0;\r\n}\r\n.signup-form h2{\r\n    color: black;\r\n    margin: 0 0 15px;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n/* .signup-form h2:before, .signup-form h2:after{\r\n    content: \"\";\r\n    height: 2px;\r\n    width: 30%;\r\n    background: #d4d4d4;\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 2;\r\n}\t \r\n/* .signup-form h2:before{\r\n    left: 0;\r\n}\r\n.signup-form h2:after{\r\n    right: 0;\r\n} */\r\n/* .signup-form .hint-text{\r\n    color: #999;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n} */\r\n.signup-form form{\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #f2f3f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.signup-form .form-group{\r\n    margin-bottom: 20px;\r\n}\r\n/* .signup-form input[type=\"checkbox\"]{\r\n    margin-top: 3px;\r\n} */\r\n.signup-form .btn{        \r\n    font-size: 16px;\r\n    font-weight: bold;\t\t\r\n    min-width: 140px;\r\n    outline: none !important;\r\n}\r\n.signup-form .row div:first-child{\r\n    padding-right: 10px;\r\n}\r\n.signup-form .row div:last-child{\r\n    padding-left: 10px;\r\n}\r\n/* .signup-form a{\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n .signup-form a:hover{\r\n    text-decoration: none;\r\n} \r\n .signup-form form a{\r\n    color: #5cb85c;\r\n    text-decoration: none;\r\n}\t\r\n.signup-form form a:hover{\r\n    text-decoration: underline;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUdFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0lBY0k7QUFDSjs7OztJQUlJO0FBQ0o7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsMkNBQTJDO0lBQzNDLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEOztJQUVJO0FBQ0o7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7SUFhSSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIFxyXG4gIGJvZHl7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM2MzczOGE7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjOTY5ZmE0O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0bnsgICAgICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybXtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4vKiAuc2lnbnVwLWZvcm0gaDI6YmVmb3JlLCAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZDRkNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgei1pbmRleDogMjtcclxufVx0IFxyXG4vKiAuc2lnbnVwLWZvcm0gaDI6YmVmb3Jle1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXJ7XHJcbiAgICByaWdodDogMDtcclxufSAqL1xyXG4vKiAuc2lnbnVwLWZvcm0gLmhpbnQtdGV4dHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4uc2lnbnVwLWZvcm0gZm9ybXtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLyogLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSAqL1xyXG4uc2lnbnVwLWZvcm0gLmJ0bnsgICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHRcdFxyXG4gICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLnJvdyBkaXY6Zmlyc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59ICAgIFx0XHJcbi8qIC5zaWdudXAtZm9ybSBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4gLnNpZ251cC1mb3JtIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0gXHJcbiAuc2lnbnVwLWZvcm0gZm9ybSBhe1xyXG4gICAgY29sb3I6ICM1Y2I4NWM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"signup-form\">\r\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"submit()\">\r\n    <h2>Register</h2>\r\n    <div class=\"form-group\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-6\">\r\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Name\">\r\n          <div *ngIf=\"!userForm.get('name').valid && userForm.get('name').touched\">\r\n            <div *ngIf=\"userForm.get('name').errors.required\">*Name is required!</div>\r\n            <div *ngIf=\"userForm.get('name').errors.minlength\">*Should be 5 characters long!</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n        <div *ngIf=\"!userForm.get('email').valid && userForm.get('email').touched\">\r\n          <div *ngIf=\"userForm.get('email').errors.required\">*Email is required!</div>\r\n          <div *ngIf=\"userForm.get('email').errors.pattern\">*Should match the pattern!</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n        <div *ngIf=\"!userForm.get('password').valid && userForm.get('password').touched\">\r\n          <div *ngIf=\"userForm.get('password').errors.required\">*Password is required!</div>\r\n          <div *ngIf=\"userForm.get('password').errors.minlength\">*Should be 5 characters long!</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"userForm.invalid\">Register Now</button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_fb, _http, _router) {
        this._fb = _fb;
        this._http = _http;
        this._router = _router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.userForm = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
    };
    RegistrationComponent.prototype.submit = function () {
        this._http.post('api/new_register', this.userForm.value).subscribe(function () {
            console.log('Successfully Registered!!');
        }, function errorCallback() {
            console.log('Failed at client side!!');
        });
        this._router.navigate(['/login']);
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Srinivas Pakala\Desktop\Testing&Examples\Mean-Stack-app\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map