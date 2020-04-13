function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <button mat-button>\n    <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n  </button>\n  Tengu's Feather\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"side\">\n    <button type=\"button\" mat-raised-button color=\"primary\" style=\"width: 85%; margin: 10px;\" (click)=\"navigate('/')\">\n      <mat-icon>home</mat-icon>\n    </button>\n    <button type=\"button\" mat-raised-button color=\"primary\" style=\"width: 85%; margin: 10px;\"\n      (click)=\"navigate('/editor')\">\n      +\n    </button>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/editor/editor.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/editor/editor.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedEditorEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<textarea id=\"editor\" #editor></textarea>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"rating\">\n  <div class=\"rating-upper\" [ngStyle]=\"{\n    'width': rate+'%',\n    'color': 'hsl(' + (240 - 2.4 * rate) +', 100%, 75%)'\n  }\">\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n  </div>\n  <div class=\"rating-lower\">\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n    <span>★</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story/stories/stories.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/stories/stories.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryStoriesStoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-table [dataSource]=\"dataSource\">\n  <ng-container matColumnDef=\"main\">\n    <mat-header-cell *matHeaderCellDef>\n      Main\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let operator\">\n      <story-list-view [story]=\"operator\"></story-list-view>\n    </mat-cell>\n  </ng-container>\n\n  <mat-row *matRowDef=\"let row; columns: ['main']\"></mat-row>\n\n</mat-table>\n\n<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[10,20,50]\"></mat-paginator>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-add/story-add.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-add/story-add.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryStoryAddStoryAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"newStoryForm\" class=\"story-form\" (ngSubmit)=\"saveStory(newStoryForm.value)\">\n  <div class=\"header\">\n    <mat-form-field class=\"title\">\n      <mat-label>Title</mat-label>\n      <input matInput formControlName=\"title\" required />\n    </mat-form-field>\n    <mat-form-field class=\"price\">\n      <mat-label>Price</mat-label>\n      <input matInput type=\"number\" (mousewheel)=\"onScroll($event)\" formControlName=\"price\" required />\n      <mat-error>Price should be positive</mat-error>\n    </mat-form-field>\n  </div>\n  <editor *ngIf=\"newStoryForm.get('text')\" formControlName=\"text\" required></editor>\n  <button class=\"submit-button\" mat-fab color=\"primary\" type=\"submit\">\n    <mat-icon>done</mat-icon>\n  </button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-list-view/story-list-view.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-list-view/story-list-view.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryStoryListViewStoryListViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"story_list_view\">\n  <div class=\"story_list_view_block\" style=\"flex: none\">\n    <button mat-fab color=\"primary\">\n      {{story.price}}\n    </button>\n  </div>\n\n  <div class=\"story_list_view_block\" style=\"flex: 2\">\n    <h1 class=\"story_title\">\n      <a routerLink=\"/stories/{{story.id}}\" routerLinkActive=\"active\">{{story.title}}</a>\n    </h1>\n    <span class=\"story_author\"><i>By {{story.author}}</i></span>\n  </div>\n\n  <div class=\"story_list_view_block\" style=\"flex-direction: row; justify-content: space-between;\">\n    <mat-chip-list aria-label=\"Fish selection\">\n      <mat-chip *ngIf=\"purchased; else elseBlock\" class=\"green\">Purchased</mat-chip>\n      <ng-template #elseBlock>\n        <mat-chip class=\"red\">Not Purchased</mat-chip>\n      </ng-template>\n    </mat-chip-list>\n    <span class=\"story_rating\">\n      <rating rate=\"{{story.rating}}\"></rating>\n    </span>\n    <span class=\"story_createdDate\">{{story.createdDate}}</span>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-view/story-view.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-view/story-view.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryStoryViewStoryViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"story-header\">\n  <h1 *ngIf=\"story\">{{story.title}}</h1>\n  <i *ngIf=\"story\">By {{story.author}}</i>\n</div>\n\n<!-- paging? -->\n\n<iframe *ngIf=\"story\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl('data:text/html,'+story.text)\"\n  frameBorder=\"0\"></iframe>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLogInLogInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"box\" class=\"login-wrapper\">\n  <mat-card-header>\n    <mat-card-title>Log In to your account</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\" class=\"example-form\">\n    <mat-card-content>\n      <mat-form-field [formGroup]=\"signInForm\" class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" [formControl]=\"email\" required>\n        <mat-error *ngIf=\"email.valid\">Not a valid email</mat-error>\n      </mat-form-field>\n\n      <mat-form-field [formGroup]=\"signInForm\" class=\"example-full-width\">\n        <input matInput placeholder=\"Password\" [formControl]=\"password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{ hide ? 'visibility' : 'visibility_off' }}</mat-icon>\n        <mat-hint align=\"end\">\n          <a routerLink=\"/reset-password\">Forgot password?</a>\n        </mat-hint>\n        <mat-hint align=\"start\">\n          <a routerLink=\"/register\">Register</a>\n        </mat-hint>\n        <mat-error *ngIf=\"password.valid\">Not a valid password</mat-error>\n      </mat-form-field>\n    </mat-card-content>\n    <button mat-flat-button color=\"accent\" class=\"btn-block\" type=\"submit\">Sign in</button>\n  </form>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"login-wrapper box\">\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\" class=\"example-form\">\n\n    <mat-card-content>\n      <mat-form-field class=\"example-full-width\" [formGroup]=\"signUpForm\">\n        <input matInput placeholder=\"Nickname\" [formControl]=\"nickName\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\" [formGroup]=\"signUpForm\">\n        <input matInput placeholder=\"Email\" [formControl]=\"email\">\n      </mat-form-field>\n\n      <mat-form-field [formGroup]=\"signUpForm\" class=\"example-full-width\">\n        <input matInput placeholder=\"Password\" [formControl]=\"password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{ hide ? 'visibility' : 'visibility_off' }}</mat-icon>\n        <mat-hint align=\"end\">\n          <a routerLink=\"/reset-password\">Forgot password?</a>\n        </mat-hint>\n        <mat-hint align=\"start\">\n          <a routerLink=\"/register\">Register</a>\n        </mat-hint>\n        <mat-error *ngIf=\"password.valid\">Not a valid password</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\" [formGroup]=\"signUpForm\">\n        <mat-label>Choose a role...</mat-label>\n        <mat-select [formControl]=\"role\">\n          <mat-option [value]=\"roles\" *ngFor=\"let roles of Roles\">{{roles}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    </mat-card-content>\n\n    <button mat-flat-button color=\"accent\" class=\"btn-block\" type=\"submit\">Register</button>\n  </form>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"box\">\n    <h2>Forgot your password?</h2>\n    <p>We can send you a reset link</p>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Enter email\" [(ngModel)]=\"email\" required />\n    </mat-form-field>\n\n    <button mat-raised-button (click)=\"resetPassword()\" class=\"mat-primary\">Reset Password</button>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-view/user-view.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-view/user-view.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserViewUserViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>user-view works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-material.module.ts":
  /*!****************************************!*\
    !*** ./src/app/app-material.module.ts ***!
    \****************************************/

  /*! exports provided: AppMaterialModule */

  /***/
  function srcAppAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function () {
      return AppMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var AppMaterialModule = function AppMaterialModule() {
      _classCallCheck(this, AppMaterialModule);
    };

    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]]
    })], AppMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _story_stories_stories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./story/stories/stories.component */
    "./src/app/story/stories/stories.component.ts");
    /* harmony import */


    var _story_story_add_story_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./story/story-add/story-add.component */
    "./src/app/story/story-add/story-add.component.ts");
    /* harmony import */


    var _story_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./story/story-view/story-view.component */
    "./src/app/story/story-view/story-view.component.ts");
    /* harmony import */


    var _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/log-in/log-in.component */
    "./src/app/user/log-in/log-in.component.ts");
    /* harmony import */


    var _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/register/register.component */
    "./src/app/user/register/register.component.ts");
    /* harmony import */


    var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/reset-password/reset-password.component */
    "./src/app/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/auth/auth-guard.service */
    "./src/app/user/auth/auth-guard.service.ts");

    var routes = [{
      path: "signin",
      component: _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"]
    }, {
      path: "register",
      component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: "reset-password",
      component: _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]
    }, {
      path: "editor",
      component: _story_story_add_story_add_component__WEBPACK_IMPORTED_MODULE_4__["StoryAddComponent"],
      canActivate: [_user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: "stories/:id",
      component: _story_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_5__["StoryViewComponent"],
      canActivate: [_user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }, {
      path: "",
      component: _story_stories_stories_component__WEBPACK_IMPORTED_MODULE_3__["StoriesComponent"],
      canActivate: [_user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-sidenav {\r\n  width: 300px;\r\n  display: flex;\r\n}\r\n\r\nmat-sidenav-container {\r\n  flex: 1;\r\n}\r\n\r\nmat-sidenav-content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  font-size: 200%;\r\n}\r\n\r\n:host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _user_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/auth/token-storage.service */
    "./src/app/user/auth/token-storage.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, _service, token) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this._service = _service;
        this.token = token;
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.token.signOut();
          window.location.reload();
        }
      }, {
        key: "navigate",
        value: function navigate(path) {
          this.router.navigateByUrl(path);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.token.getToken()) {
            this.roles = this.token.getAuthorities();
            this.roles.every(function (role) {
              if (role === "ROLE_ADMIN") {
                _this.authority = "admin";
                return false;
              } else if (role === "ROLE_PM") {
                _this.authority = "pm";
                return false;
              }

              _this.authority = "user";
              return true;
            });
          }

          this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
          };
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _user_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-material.module */
    "./src/app/app-material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _story_stories_stories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./story/stories/stories.component */
    "./src/app/story/stories/stories.component.ts");
    /* harmony import */


    var _story_story_add_story_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./story/story-add/story-add.component */
    "./src/app/story/story-add/story-add.component.ts");
    /* harmony import */


    var _story_story_list_view_story_list_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./story/story-list-view/story-list-view.component */
    "./src/app/story/story-list-view/story-list-view.component.ts");
    /* harmony import */


    var _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/rating/rating.component */
    "./src/app/shared/rating/rating.component.ts");
    /* harmony import */


    var _story_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./story/story-view/story-view.component */
    "./src/app/story/story-view/story-view.component.ts");
    /* harmony import */


    var _shared_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/editor/editor.component */
    "./src/app/shared/editor/editor.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user/log-in/log-in.component */
    "./src/app/user/log-in/log-in.component.ts");
    /* harmony import */


    var _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user/register/register.component */
    "./src/app/user/register/register.component.ts");
    /* harmony import */


    var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user/reset-password/reset-password.component */
    "./src/app/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _user_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user/user-view/user-view.component */
    "./src/app/user/user-view/user-view.component.ts");
    /* harmony import */


    var _user_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user/auth/auth-interceptor */
    "./src/app/user/auth/auth-interceptor.ts");
    /* harmony import */


    var _user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./user/auth/auth-guard.service */
    "./src/app/user/auth/auth-guard.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _story_stories_stories_component__WEBPACK_IMPORTED_MODULE_8__["StoriesComponent"], _story_story_add_story_add_component__WEBPACK_IMPORTED_MODULE_9__["StoryAddComponent"], _story_story_list_view_story_list_view_component__WEBPACK_IMPORTED_MODULE_10__["StoryListViewComponent"], _shared_rating_rating_component__WEBPACK_IMPORTED_MODULE_11__["RatingComponent"], _story_story_view_story_view_component__WEBPACK_IMPORTED_MODULE_12__["StoryViewComponent"], _shared_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__["EditorComponent"], _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_15__["LogInComponent"], _user_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_18__["UserViewComponent"], _user_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
      providers: [_user_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["httpInterceptorProviders"], _user_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared/editor/editor.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/editor/editor.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedEditorEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#editor {\r\n  flex: 1;\r\n}\r\n\r\n:host {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlZGl0b3Ige1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/editor/editor.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/editor/editor.component.ts ***!
    \***************************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppSharedEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nicEdit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nicEdit.js */
    "./src/app/shared/editor/nicEdit.js");

    var EditorComponent_1;

    var EditorComponent = EditorComponent_1 = /*#__PURE__*/function () {
      function EditorComponent() {
        var _this2 = this;

        _classCallCheck(this, EditorComponent);

        this.propagateChange = function (val) {
          return _this2._value = val;
        };
      }

      _createClass(EditorComponent, [{
        key: "writeValue",
        value: function writeValue(obj) {
          if (this.editor && this.value) {
            this.editor.setContent(this.value);
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.editor = new _nicEdit_js__WEBPACK_IMPORTED_MODULE_3__["nicEditor"]({
            fullPanel: true,
            callback: function callback(value) {
              return _this3.propagateChange(value);
            }
          }).panelInstance("editor");
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this.propagateChange(val);
        }
      }]);

      return EditorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditorComponent.prototype, "_value", void 0);
    EditorComponent = EditorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "editor",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/editor/editor.component.html"))["default"],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EditorComponent_1;
        }),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor.component.css */
      "./src/app/shared/editor/editor.component.css"))["default"]]
    })], EditorComponent);
    /***/
  },

  /***/
  "./src/app/shared/editor/nicEdit.js":
  /*!******************************************!*\
    !*** ./src/app/shared/editor/nicEdit.js ***!
    \******************************************/

  /*! exports provided: nicEditor */

  /***/
  function srcAppSharedEditorNicEditJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nicEditor", function () {
      return nicEditor;
    });
    /* NicEdit - Micro Inline WYSIWYG
     * Copyright 2007-2008 Brian Kirchoff
     *
     * NicEdit is distributed under the terms of the MIT license
     * For more information visit http://nicedit.com/
     * Do not remove this copyright message
     */

    /* Version modified
     * by Victor Chugunov
     */


    var bkExtend = function bkExtend() {
      var A = arguments;

      if (A.length == 1) {
        A = [this, A[0]];
      }

      for (var B in A[1]) {
        A[0][B] = A[1][B];
      }

      return A[0];
    };

    function bkClass() {}

    bkClass.prototype.construct = function () {};

    bkClass.extend = function (C) {
      var A = function A() {
        if (arguments[0] !== bkClass) {
          return this.construct.apply(this, arguments);
        }
      };

      var B = new this(bkClass);
      bkExtend(B, C);
      A.prototype = B;
      A.extend = this.extend;
      return A;
    };

    var bkElement = bkClass.extend({
      construct: function construct(B, A) {
        if (typeof B == "string") {
          B = (A || document).createElement(B);
        }

        B = $BK(B);
        return B;
      },
      appendTo: function appendTo(A) {
        A.appendChild(this);
        return this;
      },
      appendBefore: function appendBefore(A) {
        A.parentNode.insertBefore(this, A);
        return this;
      },
      addEvent: function addEvent(B, A) {
        bkLib.addEvent(this, B, A);
        return this;
      },
      setContent: function setContent(A) {
        this.innerHTML = A;
        return this;
      },
      pos: function pos() {
        var curtop;
        var obj;
        var C = curtop = 0;
        var B = obj = this;

        if (obj.offsetParent) {
          do {
            C += obj.offsetLeft;
            curtop += obj.offsetTop;
          } while (obj = obj.offsetParent);
        }

        var A = !window.opera ? parseInt(this.getStyle("border-width") || this.style.border) || 0 : 0;
        return [C + A, curtop + A + this.offsetHeight];
      },
      noSelect: function noSelect() {
        bkLib.noSelect(this);
        return this;
      },
      parentTag: function parentTag(A) {
        var B = this;

        do {
          if (B && B.nodeName && B.nodeName.toUpperCase() == A) {
            return B;
          }

          B = B.parentNode;
        } while (B);

        return false;
      },
      hasClass: function hasClass(A) {
        return this.className.match(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)"));
      },
      addClass: function addClass(A) {
        if (!this.hasClass(A)) {
          this.className += " nicEdit-" + A;
        }

        return this;
      },
      removeClass: function removeClass(A) {
        if (this.hasClass(A)) {
          this.className = this.className.replace(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)"), " ");
        }

        return this;
      },
      setStyle: function setStyle(A) {
        var B = this.style;

        for (var C in A) {
          switch (C) {
            case "float":
              B.cssFloat = B.styleFloat = A[C];
              break;

            case "opacity":
              B.opacity = A[C];
              B.filter = "alpha(opacity=" + Math.round(A[C] * 100) + ")";
              break;

            case "className":
              this.className = A[C];
              break;

            default:
              B[C] = A[C];
          }
        }

        return this;
      },
      getStyle: function getStyle(A, C) {
        var B = !C ? document.defaultView : C;

        if (this.nodeType == 1) {
          return B && B.getComputedStyle ? B.getComputedStyle(this, null).getPropertyValue(A) : this.currentStyle[bkLib.camelize(A)];
        }
      },
      remove: function remove() {
        this.parentNode.removeChild(this);
        return this;
      },
      setAttributes: function setAttributes(A) {
        for (var B in A) {
          this[B] = A[B];
        }

        return this;
      }
    });
    var bkLib = {
      isMSIE: navigator.appVersion.indexOf("MSIE") != -1,
      addEvent: function addEvent(C, B, A) {
        C.addEventListener ? C.addEventListener(B, A, false) : C.attachEvent("on" + B, A);
      },
      toArray: function toArray(C) {
        var B = C.length,
            A = new Array(B);

        while (B--) {
          A[B] = C[B];
        }

        return A;
      },
      noSelect: function noSelect(B) {
        if (B.setAttribute && B.nodeName.toLowerCase() != "input" && B.nodeName.toLowerCase() != "textarea") {
          B.setAttribute("unselectable", "on");
        }

        for (var A = 0; A < B.childNodes.length; A++) {
          bkLib.noSelect(B.childNodes[A]);
        }
      },
      camelize: function camelize(A) {
        return A.replace(/\-(.)/g, function (B, C) {
          return C.toUpperCase();
        });
      },
      inArray: function inArray(A, B) {
        return bkLib.search(A, B) != null;
      },
      search: function search(A, C) {
        for (var B = 0; B < A.length; B++) {
          if (A[B] == C) {
            return B;
          }
        }

        return null;
      },
      cancelEvent: function cancelEvent(A) {
        A = A || window.event;

        if (A.preventDefault && A.stopPropagation) {
          A.preventDefault();
          A.stopPropagation();
        }

        return false;
      },
      domLoad: [],
      domLoaded: function domLoaded() {
        if (arguments.callee.done) {
          return;
        }

        arguments.callee.done = true;

        for (var i = 0; i < bkLib.domLoad.length; i++) {
          bkLib.domLoad[i]();
        }
      },
      onDomLoaded: function onDomLoaded(A) {
        this.domLoad.push(A);

        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", bkLib.domLoaded, null);
        } else {
          if (bkLib.isMSIE) {
            document.write("<style>.nicEdit-main p { margin: 0; }</style><script id=__ie_onload defer " + (location.protocol == "https:" ? "src='javascript:void(0)'" : "src=//0") + "></script>");

            $BK("__ie_onload").onreadystatechange = function () {
              if (this.readyState == "complete") {
                bkLib.domLoaded();
              }
            };
          }
        }

        window.onload = bkLib.domLoaded;
      }
    };

    function $BK(A) {
      if (typeof A == "string") {
        A = document.getElementById(A);
      }

      return A && !A.appendTo ? bkExtend(A, bkElement.prototype) : A;
    }

    var bkEvent = {
      addEvent: function addEvent(A, B) {
        if (B) {
          this.eventList = this.eventList || {};
          this.eventList[A] = this.eventList[A] || [];
          this.eventList[A].push(B);
        }

        return this;
      },
      fireEvent: function fireEvent() {
        var A = bkLib.toArray(arguments),
            C = A.shift();
        /* for only one instance */

        if (this.nicInstances[0] && (arguments[0] == "buttonClick" || arguments[0] == "selected") && this.options.callback) this.options.callback(this.nicInstances[0].elm.innerHTML);

        if (this.eventList && this.eventList[C]) {
          for (var B = 0; B < this.eventList[C].length; B++) {
            this.eventList[C][B].apply(this, A);
          }
        }
      }
    };

    function __(A) {
      return A;
    }

    Function.prototype.closure = function () {
      var A = this,
          B = bkLib.toArray(arguments),
          C = B.shift();
      return function () {
        if (typeof bkLib != "undefined") {
          return A.apply(C, B.concat(bkLib.toArray(arguments)));
        }
      };
    };

    Function.prototype.closureListener = function () {
      var A = this,
          C = bkLib.toArray(arguments),
          B = C.shift();
      return function (E) {
        E = E || window.event;

        if (E.target) {
          var D = E.target;
        } else {
          var D = E.srcElement;
        }

        return A.apply(B, [E, D].concat(C));
      };
    };

    var nicEditorConfig = bkClass.extend({
      buttons: {
        bold: {
          name: __("Click to Bold"),
          command: "Bold",
          tags: ["B", "STRONG"],
          css: {
            "font-weight": "bold"
          },
          key: "b"
        },
        italic: {
          name: __("Click to Italic"),
          command: "Italic",
          tags: ["EM", "I"],
          css: {
            "font-style": "italic"
          },
          key: "i"
        },
        underline: {
          name: __("Click to Underline"),
          command: "Underline",
          tags: ["U"],
          css: {
            "text-decoration": "underline"
          },
          key: "u"
        },
        left: {
          name: __("Left Align"),
          command: "justifyleft",
          noActive: true
        },
        center: {
          name: __("Center Align"),
          command: "justifycenter",
          noActive: true
        },
        right: {
          name: __("Right Align"),
          command: "justifyright",
          noActive: true
        },
        justify: {
          name: __("Justify Align"),
          command: "justifyfull",
          noActive: true
        },
        ol: {
          name: __("Insert Ordered List"),
          command: "insertorderedlist",
          tags: ["OL"]
        },
        ul: {
          name: __("Insert Unordered List"),
          command: "insertunorderedlist",
          tags: ["UL"]
        },
        subscript: {
          name: __("Click to Subscript"),
          command: "subscript",
          tags: ["SUB"]
        },
        superscript: {
          name: __("Click to Superscript"),
          command: "superscript",
          tags: ["SUP"]
        },
        strikethrough: {
          name: __("Click to Strike Through"),
          command: "strikeThrough",
          css: {
            "text-decoration": "line-through"
          }
        },
        removeformat: {
          name: __("Remove Formatting"),
          command: "removeformat",
          noActive: true
        },
        indent: {
          name: __("Indent Text"),
          command: "indent",
          noActive: true
        },
        outdent: {
          name: __("Remove Indent"),
          command: "outdent",
          noActive: true
        },
        hr: {
          name: __("Horizontal Rule"),
          command: "insertHorizontalRule",
          noActive: true
        }
      },
      iconsPath: "/assets/nicEditorIcons.gif",
      buttonList: ["save", "bold", "italic", "underline", "left", "center", "right", "justify", "ol", "ul", "fontSize", "fontFamily", "fontFormat", "indent", "outdent", "image", "upload", "link", "unlink", "forecolor", "bgcolor"],
      iconList: {
        xhtml: 1,
        bgcolor: 2,
        forecolor: 3,
        bold: 4,
        center: 5,
        hr: 6,
        indent: 7,
        italic: 8,
        justify: 9,
        left: 10,
        ol: 11,
        outdent: 12,
        removeformat: 13,
        right: 14,
        save: 25,
        strikethrough: 16,
        subscript: 17,
        superscript: 18,
        ul: 19,
        underline: 20,
        image: 21,
        link: 22,
        unlink: 23,
        close: 24,
        arrow: 26
      }
    });
    var nicEditors = {
      nicPlugins: [],
      editors: [],
      registerPlugin: function registerPlugin(B, A) {
        this.nicPlugins.push({
          p: B,
          o: A
        });
      },
      allTextAreas: function allTextAreas(C) {
        var A = document.getElementsByTagName("textarea");

        for (var B = 0; B < A.length; B++) {
          nicEditors.editors.push(new nicEditor(C).panelInstance(A[B]));
        }

        return nicEditors.editors;
      },
      findEditor: function findEditor(C) {
        var B = nicEditors.editors;

        for (var A = 0; A < B.length; A++) {
          if (B[A].instanceById(C)) {
            return B[A].instanceById(C);
          }
        }
      }
    };
    var nicEditor = bkClass.extend({
      construct: function construct(C) {
        this.options = new nicEditorConfig();
        bkExtend(this.options, C);
        this.nicInstances = new Array();
        this.loadedPlugins = new Array();
        var A = nicEditors.nicPlugins;

        for (var B = 0; B < A.length; B++) {
          this.loadedPlugins.push(new A[B].p(this, A[B].o));
        }

        nicEditors.editors.push(this);
        bkLib.addEvent(document.body, "mousedown", this.selectCheck.closureListener(this));
      },
      panelInstance: function panelInstance(B, C) {
        B = this.checkReplace($BK(B));
        var A = new bkElement("DIV")
        /*.setStyle({
          width: (parseInt(B.getStyle("width")) || B.clientWidth) + "px"
        })*/
        .appendBefore(B);
        this.setPanel(A);
        return this.addInstance(B, C);
      },
      checkReplace: function checkReplace(B) {
        var A = nicEditors.findEditor(B);

        if (A) {
          A.removeInstance(B);
          A.removePanel();
        }

        return B;
      },
      addInstance: function addInstance(B, C) {
        B = this.checkReplace($BK(B));

        if (B.contentEditable || !!window.opera) {
          var A = new nicEditorInstance(B, C, this);
        } else {
          var A = new nicEditorIFrameInstance(B, C, this);
        }

        this.nicInstances.push(A);
        return this;
      },
      removeInstance: function removeInstance(C) {
        C = $BK(C);
        var B = this.nicInstances;

        for (var A = 0; A < B.length; A++) {
          if (B[A].e == C) {
            B[A].remove();
            this.nicInstances.splice(A, 1);
          }
        }
      },
      removePanel: function removePanel(A) {
        if (this.nicPanel) {
          this.nicPanel.remove();
          this.nicPanel = null;
        }
      },
      instanceById: function instanceById(C) {
        C = $BK(C);
        var B = this.nicInstances;

        for (var A = 0; A < B.length; A++) {
          if (B[A].e == C) {
            return B[A];
          }
        }
      },
      setPanel: function setPanel(A) {
        this.nicPanel = new nicEditorPanel($BK(A), this.options, this);
        this.fireEvent("panel", this.nicPanel);
        return this;
      },
      nicCommand: function nicCommand(B, A) {
        if (this.selectedInstance) {
          this.selectedInstance.nicCommand(B, A);
        }
      },
      getIcon: function getIcon(D, A) {
        var C = this.options.iconList[D];
        var B = A.iconFiles ? A.iconFiles[D] : "";
        return {
          backgroundImage: "url('" + (C ? this.options.iconsPath : B) + "')",
          backgroundPosition: (C ? (C - 1) * -18 : 0) + "px 0px"
        };
      },
      selectCheck: function selectCheck(C, A) {
        var B = false;

        do {
          if (A.className && A.className.indexOf("nicEdit") != -1) {
            return false;
          }
        } while (A = A.parentNode);

        this.fireEvent("blur", this.selectedInstance, A);
        this.lastSelectedInstance = this.selectedInstance;
        this.selectedInstance = null;
        return false;
      },
      setContent: function setContent(A) {
        this.nicInstances.forEach(function (r) {
          return r.setContent(A);
        });
      }
    });
    nicEditor = nicEditor.extend(bkEvent);
    var nicEditorInstance = bkClass.extend({
      isSelected: false,
      construct: function construct(G, D, C) {
        this.ne = C;
        this.elm = this.e = G;
        this.options = D || {};
        var newX = parseInt(G.getStyle("width")) || G.clientWidth;
        var newY = parseInt(G.getStyle("height")) || G.clientHeight;
        this.initialHeight = newY - 8;
        var H = G.nodeName.toLowerCase() == "textarea";

        if (H || this.options.hasPanel) {
          var B = bkLib.isMSIE && !(typeof document.body.style.maxHeight != "undefined" && document.compatMode == "CSS1Compat");
          var E = {
            // width: newX + "px",
            // height: newY + "px",
            flex: 1,
            position: "relative",
            border: "1px solid #ccc",
            borderTop: 0,
            overflowY: "auto",
            overflowX: "hidden"
          };
          E[B ? "height" : "maxHeight"] = this.ne.options.maxHeight ? this.ne.options.maxHeight + "px" : null;
          this.editorContain = new bkElement("DIV").setStyle(E).appendBefore(G);
          var A = new bkElement("DIV").setStyle({
            //width: newX - 8 + "px",
            margin: "4px",
            //minHeight: newY + "px"
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }).addClass("main").appendTo(this.editorContain);
          G.setStyle({
            display: "none"
          });
          A.innerHTML = G.innerHTML;

          if (H) {
            A.setContent(G.value);
            this.copyElm = G;
            var F = G.parentTag("FORM");

            if (F) {
              bkLib.addEvent(F, "submit", this.saveContent.closure(this));
            }
          }

          A.setStyle(B ? {
            height: newY + "px"
          } : {
            overflow: "auto"
          });
          this.elm = A;
        }

        this.ne.addEvent("blur", this.blur.closure(this));
        this.init();
        this.blur();
      },
      init: function init() {
        this.elm.setAttribute("contentEditable", "true");

        if (this.getContent() == "") {
          this.setContent("<br />");
        }

        this.instanceDoc = document.defaultView;
        this.elm.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keypress", this.keyDown.closureListener(this)).addEvent("focus", this.selected.closure(this)).addEvent("blur", this.blur.closure(this)).addEvent("keyup", this.selected.closure(this));
        this.ne.fireEvent("add", this);
      },
      remove: function remove() {
        this.saveContent();

        if (this.copyElm || this.options.hasPanel) {
          this.editorContain.remove();
          this.e.setStyle({
            display: "block"
          });
          this.ne.removePanel();
        }

        this.disable();
        this.ne.fireEvent("remove", this);
      },
      disable: function disable() {
        this.elm.setAttribute("contentEditable", "false");
      },
      getSel: function getSel() {
        return window.getSelection ? window.getSelection() : document.selection;
      },
      getRng: function getRng() {
        var A = this.getSel();

        if (!A || A.rangeCount === 0) {
          return;
        }

        return A.rangeCount > 0 ? A.getRangeAt(0) : A.createRange();
      },
      selRng: function selRng(A, B) {
        if (window.getSelection) {
          B.removeAllRanges();
          B.addRange(A);
        } else {
          A.select();
        }
      },
      selElm: function selElm() {
        var C = this.getRng();

        if (!C) {
          return;
        }

        if (C.startContainer) {
          var D = C.startContainer;

          if (C.cloneContents().childNodes.length == 1) {
            for (var B = 0; B < D.childNodes.length; B++) {
              var A = D.childNodes[B].ownerDocument.createRange();
              A.selectNode(D.childNodes[B]);

              if (C.compareBoundaryPoints(Range.START_TO_START, A) != 1 && C.compareBoundaryPoints(Range.END_TO_END, A) != -1) {
                return $BK(D.childNodes[B]);
              }
            }
          }

          return $BK(D);
        } else {
          return $BK(this.getSel().type == "Control" ? C.item(0) : C.parentElement());
        }
      },
      saveRng: function saveRng() {
        this.savedRange = this.getRng();
        this.savedSel = this.getSel();
      },
      restoreRng: function restoreRng() {
        if (this.savedRange) {
          this.selRng(this.savedRange, this.savedSel);
        }
      },
      keyDown: function keyDown(B, A) {
        if (B.ctrlKey) {
          this.ne.fireEvent("key", this, B);
        }
      },
      selected: function selected(C, A) {
        if (!A && !(A = this.selElm)) {
          A = this.selElm();
        }

        if (!C.ctrlKey) {
          var B = this.ne.selectedInstance;

          if (B != this) {
            if (B) {
              this.ne.fireEvent("blur", B, A);
            }

            this.ne.selectedInstance = this;
            this.ne.fireEvent("focus", B, A);
          }

          this.ne.fireEvent("selected", B, A);
          this.isFocused = true;
          this.elm.addClass("selected");
        }

        return false;
      },
      blur: function blur() {
        this.isFocused = false;
        this.elm.removeClass("selected");
      },
      saveContent: function saveContent() {
        if (this.copyElm || this.options.hasPanel) {
          this.ne.fireEvent("save", this);
          this.copyElm ? this.copyElm.value = this.getContent() : this.e.innerHTML = this.getContent();
        }
      },
      getElm: function getElm() {
        return this.elm;
      },
      getContent: function getContent() {
        this.content = this.getElm().innerHTML;
        this.ne.fireEvent("get", this);
        return this.content;
      },
      setContent: function setContent(A) {
        this.content = A;
        this.ne.fireEvent("set", this);
        this.elm.innerHTML = this.content;
      },
      nicCommand: function nicCommand(B, A) {
        document.execCommand(B, false, A);
      }
    });
    var nicEditorIFrameInstance = nicEditorInstance.extend({
      savedStyles: [],
      init: function init() {
        var B = this.elm.innerHTML.replace(/^\s+|\s+$/g, "");
        this.elm.innerHTML = "";
        !B ? B = "<br />" : B;
        this.initialContent = B;
        this.elmFrame = new bkElement("iframe").setAttributes({
          src: "javascript:;",
          frameBorder: 0,
          allowTransparency: "true",
          scrolling: "no"
        }).setStyle({
          height: "100px",
          width: "100%"
        }).addClass("frame").appendTo(this.elm);

        if (this.copyElm) {
          this.elmFrame.setStyle({
            width: this.elm.offsetWidth - 4 + "px"
          });
        }

        var A = ["font-size", "font-family", "font-weight", "color"];

        for (var itm in A) {
          this.savedStyles[bkLib.camelize(itm)] = this.elm.getStyle(itm);
        }

        setTimeout(this.initFrame.closure(this), 50);
      },
      disable: function disable() {
        this.elm.innerHTML = this.getContent();
      },
      initFrame: function initFrame() {
        var B = $BK(this.elmFrame.contentWindow.document);
        B.designMode = "on";
        B.open();
        var A = this.ne.options.externalCSS;
        B.write("<html><head>" + (A ? '<link href="' + A + '" rel="stylesheet" type="text/css" />' : "") + '</head><body id="nicEditContent" style="margin: 0 !important; background-color: transparent !important;">' + this.initialContent + "</body></html>");
        B.close();
        this.frameDoc = B;
        this.frameWin = $BK(this.elmFrame.contentWindow);
        this.frameContent = $BK(this.frameWin.document.body).setStyle(this.savedStyles);
        this.instanceDoc = this.frameWin.document.defaultView;
        this.heightUpdate();
        this.frameDoc.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keyup", this.heightUpdate.closureListener(this)).addEvent("keydown", this.keyDown.closureListener(this)).addEvent("keyup", this.selected.closure(this));
        this.ne.fireEvent("add", this);
      },
      getElm: function getElm() {
        return this.frameContent;
      },
      setContent: function setContent(A) {
        this.content = A;
        this.ne.fireEvent("set", this);
        this.frameContent.innerHTML = this.content;
        this.heightUpdate();
      },
      getSel: function getSel() {
        return this.frameWin ? this.frameWin.getSelection() : this.frameDoc.selection;
      },
      heightUpdate: function heightUpdate() {
        this.elmFrame.style.height = Math.max(this.frameContent.offsetHeight, this.initialHeight) + "px";
      },
      nicCommand: function nicCommand(B, A) {
        this.frameDoc.execCommand(B, false, A);
        setTimeout(this.heightUpdate.closure(this), 100);
      }
    });
    var nicEditorPanel = bkClass.extend({
      construct: function construct(E, B, A) {
        this.elm = E;
        this.options = B;
        this.ne = A;
        this.panelButtons = new Array();
        this.buttonList = bkExtend([], this.ne.options.buttonList);
        this.panelContain = new bkElement("DIV").setStyle({
          overflow: "hidden",
          border: "1px solid #cccccc",
          backgroundColor: "#efefef"
        }).addClass("panelContain");
        this.panelElm = new bkElement("DIV").setStyle({
          margin: "2px",
          marginTop: "0px",
          zoom: 1,
          overflow: "hidden"
        }).addClass("panel").appendTo(this.panelContain);
        this.panelContain.appendTo(E);
        var C = this.ne.options;
        var D = C.buttons;

        for (var button in D) {
          this.addButton(button, C, true);
        }

        this.reorder();
        E.noSelect();
      },
      addButton: function addButton(buttonName, options, noOrder) {
        var button = options.buttons[buttonName];
        var type = button.type ? eval("(typeof(" + button.type + ') == "undefined") ? null : ' + button.type + ";") : nicEditorButton;
        var hasButton = bkLib.inArray(this.buttonList, buttonName);

        if (type && (hasButton || this.ne.options.fullPanel)) {
          this.panelButtons.push(new type(this.panelElm, buttonName, options, this.ne));

          if (!hasButton) {
            this.buttonList.push(buttonName);
          }
        }
      },
      findButton: function findButton(B) {
        for (var A = 0; A < this.panelButtons.length; A++) {
          if (this.panelButtons[A].name == B) {
            return this.panelButtons[A];
          }
        }
      },
      reorder: function reorder() {
        var C = this.buttonList;

        for (var B = 0; B < C.length; B++) {
          var A = this.findButton(C[B]);

          if (A) {
            this.panelElm.appendChild(A.margin);
          }
        }
      },
      remove: function remove() {
        this.elm.remove();
      }
    });
    var nicEditorButton = bkClass.extend({
      construct: function construct(D, A, C, B) {
        this.options = C.buttons[A];
        this.name = A;
        this.ne = B;
        this.elm = D;
        this.margin = new bkElement("DIV").setStyle({
          "float": "left",
          marginTop: "2px"
        }).appendTo(D);
        this.contain = new bkElement("DIV").setStyle({
          width: "20px",
          height: "20px"
        }).addClass("buttonContain").appendTo(this.margin);
        this.border = new bkElement("DIV").setStyle({
          backgroundColor: "#efefef",
          border: "1px solid #efefef"
        }).appendTo(this.contain);
        this.button = new bkElement("DIV").setStyle({
          width: "18px",
          height: "18px",
          overflow: "hidden",
          zoom: 1,
          cursor: "pointer"
        }).addClass("button").setStyle(this.ne.getIcon(A, C)).appendTo(this.border);
        this.button.addEvent("mouseover", this.hoverOn.closure(this)).addEvent("mouseout", this.hoverOff.closure(this)).addEvent("mousedown", this.mouseClick.closure(this)).noSelect();

        if (!window.opera) {
          this.button.onmousedown = this.button.onclick = bkLib.cancelEvent;
        }

        B.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this)).addEvent("key", this.key.closure(this));
        this.disable();
        this.init();
      },
      init: function init() {},
      hide: function hide() {
        this.contain.setStyle({
          display: "none"
        });
      },
      updateState: function updateState() {
        if (this.isDisabled) {
          this.setBg();
        } else {
          if (this.isHover) {
            this.setBg("hover");
          } else {
            if (this.isActive) {
              this.setBg("active");
            } else {
              this.setBg();
            }
          }
        }
      },
      setBg: function setBg(A) {
        switch (A) {
          case "hover":
            var B = {
              border: "1px solid #666",
              backgroundColor: "#ddd"
            };
            break;

          case "active":
            var B = {
              border: "1px solid #666",
              backgroundColor: "#ccc"
            };
            break;

          default:
            var B = {
              border: "1px solid #efefef",
              backgroundColor: "#efefef"
            };
        }

        this.border.setStyle(B).addClass("button-" + A);
      },
      checkNodes: function checkNodes(A) {
        var B = A;

        do {
          if (this.options.tags && bkLib.inArray(this.options.tags, B.nodeName)) {
            this.activate();
            return true;
          }
        } while (B = B.parentNode && B.className != "nicEdit");

        B = $BK(A);

        while (B.nodeType == 3) {
          B = $BK(B.parentNode);
        }

        if (this.options.css) {
          for (var itm in this.options.css) {
            if (B.getStyle(itm, this.ne.selectedInstance.instanceDoc) == this.options.css[itm]) {
              this.activate();
              return true;
            }
          }
        }

        this.deactivate();
        return false;
      },
      activate: function activate() {
        if (!this.isDisabled) {
          this.isActive = true;
          this.updateState();
          this.ne.fireEvent("buttonActivate", this);
        }
      },
      deactivate: function deactivate() {
        this.isActive = false;
        this.updateState();

        if (!this.isDisabled) {
          this.ne.fireEvent("buttonDeactivate", this);
        }
      },
      enable: function enable(A, B) {
        this.isDisabled = false;
        this.contain.setStyle({
          opacity: 1
        }).addClass("buttonEnabled");
        this.updateState();
        this.checkNodes(B);
      },
      disable: function disable(A, B) {
        this.isDisabled = true;
        this.contain.setStyle({
          opacity: 0.6
        }).removeClass("buttonEnabled");
        this.updateState();
      },
      toggleActive: function toggleActive() {
        this.isActive ? this.deactivate() : this.activate();
      },
      hoverOn: function hoverOn() {
        if (!this.isDisabled) {
          this.isHover = true;
          this.updateState();
          this.ne.fireEvent("buttonOver", this);
        }
      },
      hoverOff: function hoverOff() {
        this.isHover = false;
        this.updateState();
        this.ne.fireEvent("buttonOut", this);
      },
      mouseClick: function mouseClick() {
        if (this.options.command) {
          this.ne.nicCommand(this.options.command, this.options.commandArgs);

          if (!this.options.noActive) {
            this.toggleActive();
          }
        }

        this.ne.fireEvent("buttonClick", this);
      },
      key: function key(A, B) {
        if (this.options.key && B.ctrlKey && String.fromCharCode(B.keyCode || B.charCode).toLowerCase() == this.options.key) {
          this.mouseClick();

          if (B.preventDefault) {
            B.preventDefault();
          }
        }
      }
    });
    var nicPlugin = bkClass.extend({
      construct: function construct(B, A) {
        this.options = A;
        this.ne = B;
        this.ne.addEvent("panel", this.loadPanel.closure(this));
        this.init();
      },
      loadPanel: function loadPanel(C) {
        var B = this.options.buttons;

        for (var A in B) {
          C.addButton(A, this.options);
        }

        C.reorder();
      },
      init: function init() {}
    });
    var nicPaneOptions = {};
    var nicEditorPane = bkClass.extend({
      construct: function construct(D, C, B, A) {
        this.ne = C;
        this.elm = D;
        this.pos = D.pos();
        this.contain = new bkElement("div").setStyle({
          zIndex: "99999",
          overflow: "hidden",
          position: "absolute",
          left: this.pos[0] + "px",
          top: this.pos[1] + "px"
        });
        this.pane = new bkElement("div").setStyle({
          fontSize: "12px",
          border: "1px solid #ccc",
          overflow: "hidden",
          padding: "4px",
          textAlign: "left",
          backgroundColor: "#ffffc9"
        }).addClass("pane").setStyle(B).appendTo(this.contain);

        if (A && !A.options.noClose) {
          this.close = new bkElement("div").setStyle({
            "float": "right",
            height: "16px",
            width: "16px",
            cursor: "pointer"
          }).setStyle(this.ne.getIcon("close", nicPaneOptions)).addEvent("mousedown", A.removePane.closure(this)).appendTo(this.pane);
        }

        this.contain.noSelect().appendTo(document.body);
        this.position();
        this.init();
      },
      init: function init() {},
      position: function position() {
        if (this.ne.nicPanel) {
          var B = this.ne.nicPanel.elm;
          var A = B.pos();
          var C = A[0] + parseInt(B.getStyle("width")) - (parseInt(this.pane.getStyle("width")) + 8);

          if (C < this.pos[0]) {
            this.contain.setStyle({
              left: C + "px"
            });
          }
        }
      },
      toggle: function toggle() {
        this.isVisible = !this.isVisible;
        this.contain.setStyle({
          display: this.isVisible ? "block" : "none"
        });
      },
      remove: function remove() {
        if (this.contain) {
          this.contain.remove();
          this.contain = null;
        }
      },
      append: function append(A) {
        A.appendTo(this.pane);
      },
      setContent: function setContent(A) {
        this.pane.setContent(A);
      }
    });
    var nicEditorAdvancedButton = nicEditorButton.extend({
      init: function init() {
        this.ne.addEvent("selected", this.removePane.closure(this)).addEvent("blur", this.removePane.closure(this));
      },
      mouseClick: function mouseClick() {
        if (!this.isDisabled) {
          if (this.pane && this.pane.pane) {
            this.removePane();
          } else {
            this.pane = new nicEditorPane(this.contain, this.ne, {
              width: this.width || "270px",
              backgroundColor: "#fff"
            }, this);
            this.addPane();
            this.ne.selectedInstance.saveRng();
          }
        }
      },
      addForm: function addForm(C, G) {
        this.form = new bkElement("form").addEvent("submit", this.submit.closureListener(this));
        this.pane.append(this.form);
        this.inputs = {};

        for (var itm in C) {
          var D = C[itm];
          var F = "";

          if (G) {
            F = G.getAttribute(itm);
          }

          if (!F) {
            F = D.value || "";
          }

          var A = C[itm].type;

          if (A == "title") {
            new bkElement("div").setContent(D.txt).setStyle({
              fontSize: "14px",
              fontWeight: "bold",
              padding: "0px",
              margin: "2px 0"
            }).appendTo(this.form);
          } else {
            var B = new bkElement("div").setStyle({
              overflow: "hidden",
              clear: "both"
            }).appendTo(this.form);

            if (D.txt) {
              new bkElement("label").setAttributes({
                "for": itm
              }).setContent(D.txt).setStyle({
                margin: "2px 4px",
                fontSize: "13px",
                width: "50px",
                lineHeight: "20px",
                textAlign: "right",
                "float": "left"
              }).appendTo(B);
            }

            switch (A) {
              case "text":
                this.inputs[itm] = new bkElement("input").setAttributes({
                  id: itm,
                  value: F,
                  type: "text"
                }).setStyle({
                  margin: "2px 0",
                  fontSize: "13px",
                  "float": "left",
                  height: "20px",
                  border: "1px solid #ccc",
                  overflow: "hidden"
                }).setStyle(D.style).appendTo(B);
                break;

              case "select":
                this.inputs[itm] = new bkElement("select").setAttributes({
                  id: itm
                }).setStyle({
                  border: "1px solid #ccc",
                  "float": "left",
                  margin: "2px 0"
                }).appendTo(B);

                for (var opt in D.options) {
                  var E = new bkElement("option").setAttributes({
                    value: opt,
                    selected: opt == F ? "selected" : ""
                  }).setContent(D.options[opt]).appendTo(this.inputs[itm]);
                }

                break;

              case "content":
                this.inputs[itm] = new bkElement("textarea").setAttributes({
                  id: itm
                }).setStyle({
                  border: "1px solid #ccc",
                  "float": "left"
                }).setStyle(D.style).appendTo(B);
                this.inputs[itm].value = F;
            }
          }
        }

        new bkElement("input").setAttributes({
          type: "submit"
        }).setStyle({
          backgroundColor: "#efefef",
          border: "1px solid #ccc",
          margin: "3px 0",
          "float": "left",
          clear: "both"
        }).appendTo(this.form);
        this.form.onsubmit = bkLib.cancelEvent;
      },
      submit: function submit() {},
      findElm: function findElm(B, A, E) {
        var D = this.ne.selectedInstance.getElm().getElementsByTagName(B);

        for (var C = 0; C < D.length; C++) {
          if (D[C].getAttribute(A) == E) {
            return $BK(D[C]);
          }
        }
      },
      removePane: function removePane() {
        if (this.pane) {
          this.pane.remove();
          this.pane = null;
          this.ne.selectedInstance.restoreRng();
        }
      }
    });
    var nicButtonTips = bkClass.extend({
      construct: function construct(A) {
        this.ne = A;
        A.addEvent("buttonOver", this.show.closure(this)).addEvent("buttonOut", this.hide.closure(this));
      },
      show: function show(A) {
        this.timer = setTimeout(this.create.closure(this, A), 400);
      },
      create: function create(A) {
        this.timer = null;

        if (!this.pane) {
          this.pane = new nicEditorPane(A.button, this.ne, {
            fontSize: "12px",
            marginTop: "5px"
          });
          this.pane.setContent(A.options.name);
        }
      },
      hide: function hide(A) {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (this.pane) {
          this.pane = this.pane.remove();
        }
      }
    });
    nicEditors.registerPlugin(nicButtonTips);
    var nicSelectOptions = {
      buttons: {
        fontSize: {
          name: __("Select Font Size"),
          type: "nicEditorFontSizeSelect",
          command: "fontsize"
        },
        fontFamily: {
          name: __("Select Font Family"),
          type: "nicEditorFontFamilySelect",
          command: "fontname"
        },
        fontFormat: {
          name: __("Select Font Format"),
          type: "nicEditorFontFormatSelect",
          command: "formatBlock"
        }
      }
    };
    var nicEditorSelect = bkClass.extend({
      construct: function construct(D, A, C, B) {
        this.options = C.buttons[A];
        this.elm = D;
        this.ne = B;
        this.name = A;
        this.selOptions = new Array();
        this.margin = new bkElement("div").setStyle({
          "float": "left",
          margin: "2px 1px 0 1px"
        }).appendTo(this.elm);
        this.contain = new bkElement("div").setStyle({
          width: "90px",
          height: "20px",
          cursor: "pointer",
          overflow: "hidden"
        }).addClass("selectContain").addEvent("click", this.toggle.closure(this)).appendTo(this.margin);
        this.items = new bkElement("div").setStyle({
          overflow: "hidden",
          zoom: 1,
          border: "1px solid #ccc",
          paddingLeft: "3px",
          backgroundColor: "#fff"
        }).appendTo(this.contain);
        this.control = new bkElement("div").setStyle({
          overflow: "hidden",
          "float": "right",
          height: "18px",
          width: "16px"
        }).addClass("selectControl").setStyle(this.ne.getIcon("arrow", C)).appendTo(this.items);
        this.txt = new bkElement("div").setStyle({
          overflow: "hidden",
          "float": "left",
          width: "66px",
          height: "14px",
          marginTop: "1px",
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "12px"
        }).addClass("selectTxt").appendTo(this.items);

        if (!window.opera) {
          this.contain.onmousedown = this.control.onmousedown = this.txt.onmousedown = bkLib.cancelEvent;
        }

        this.margin.noSelect();
        this.ne.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this));
        this.disable();
        this.init();
      },
      disable: function disable() {
        this.isDisabled = true;
        this.close();
        this.contain.setStyle({
          opacity: 0.6
        });
      },
      enable: function enable(A) {
        this.isDisabled = false;
        this.close();
        this.contain.setStyle({
          opacity: 1
        });
      },
      setDisplay: function setDisplay(A) {
        this.txt.setContent(A);
      },
      toggle: function toggle() {
        if (!this.isDisabled) {
          this.pane ? this.close() : this.open();
        }
      },
      open: function open() {
        this.pane = new nicEditorPane(this.items, this.ne, {
          width: "88px",
          padding: "0px",
          borderTop: 0,
          borderLeft: "1px solid #ccc",
          borderRight: "1px solid #ccc",
          borderBottom: "0px",
          backgroundColor: "#fff"
        });

        for (var C = 0; C < this.selOptions.length; C++) {
          var _bkElement$setStyle;

          var B = this.selOptions[C];
          var A = new bkElement("div").setStyle((_bkElement$setStyle = {
            overflow: "hidden",
            borderBottom: "1px solid #ccc",
            width: "88px",
            textAlign: "left"
          }, _defineProperty(_bkElement$setStyle, "overflow", "hidden"), _defineProperty(_bkElement$setStyle, "cursor", "pointer"), _bkElement$setStyle));
          var D = new bkElement("div").setStyle({
            padding: "0px 4px"
          }).setContent(B[1]).appendTo(A).noSelect();
          D.addEvent("click", this.update.closure(this, B[0])).addEvent("mouseover", this.over.closure(this, D)).addEvent("mouseout", this.out.closure(this, D)).setAttributes("id", B[0]);
          this.pane.append(A);

          if (!window.opera) {
            D.onmousedown = bkLib.cancelEvent;
          }
        }
      },
      close: function close() {
        if (this.pane) {
          this.pane = this.pane.remove();
        }
      },
      over: function over(A) {
        A.setStyle({
          backgroundColor: "#ccc"
        });
      },
      out: function out(A) {
        A.setStyle({
          backgroundColor: "#fff"
        });
      },
      add: function add(B, A) {
        this.selOptions.push(new Array(B, A));
      },
      update: function update(A) {
        this.ne.nicCommand(this.options.command, A);
        this.close();
      }
    });
    var nicEditorFontSizeSelect = nicEditorSelect.extend({
      sel: {
        1: "1&nbsp;(8pt)",
        2: "2&nbsp;(10pt)",
        3: "3&nbsp;(12pt)",
        4: "4&nbsp;(14pt)",
        5: "5&nbsp;(18pt)",
        6: "6&nbsp;(24pt)"
      },
      init: function init() {
        this.setDisplay("Font&nbsp;Size...");

        for (var itm in this.sel) {
          this.add(itm, '<font size="' + itm + '">' + this.sel[itm] + "</font>");
        }
      }
    });
    var nicEditorFontFamilySelect = nicEditorSelect.extend({
      sel: {
        arial: "Arial",
        "comic sans ms": "Comic Sans",
        "courier new": "Courier New",
        georgia: "Georgia",
        helvetica: "Helvetica",
        impact: "Impact",
        "times new roman": "Times",
        "trebuchet ms": "Trebuchet",
        verdana: "Verdana"
      },
      init: function init() {
        this.setDisplay("Font&nbsp;Family...");

        for (var itm in this.sel) {
          this.add(itm, '<font face="' + itm + '">' + this.sel[itm] + "</font>");
        }
      }
    });
    var nicEditorFontFormatSelect = nicEditorSelect.extend({
      sel: {
        p: "Paragraph",
        pre: "Pre",
        h6: "Heading&nbsp;6",
        h5: "Heading&nbsp;5",
        h4: "Heading&nbsp;4",
        h3: "Heading&nbsp;3",
        h2: "Heading&nbsp;2",
        h1: "Heading&nbsp;1"
      },
      init: function init() {
        this.setDisplay("Font&nbsp;Format...");

        for (var itm in this.sel) {
          var A = itm.toUpperCase();
          this.add("<" + A + ">", "<" + itm + ' style="padding: 0px; margin: 0px;">' + this.sel[itm] + "</" + A + ">");
        }
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicSelectOptions);
    var nicLinkOptions = {
      buttons: {
        link: {
          name: "Add Link",
          type: "nicLinkButton",
          tags: ["A"]
        },
        unlink: {
          name: "Remove Link",
          command: "unlink",
          noActive: true
        }
      }
    };
    var nicLinkButton = nicEditorAdvancedButton.extend({
      addPane: function addPane() {
        this.ln = this.ne.selectedInstance.selElm().parentTag("A");
        this.addForm({
          "": {
            type: "title",
            txt: "Add/Edit Link"
          },
          href: {
            type: "text",
            txt: "URL",
            value: "http://",
            style: {
              width: "150px"
            }
          },
          title: {
            type: "text",
            txt: "Title"
          },
          target: {
            type: "select",
            txt: "Open In",
            options: {
              "": "Current Window",
              _blank: "New Window"
            },
            style: {
              width: "100px"
            }
          }
        }, this.ln);
      },
      submit: function submit(C) {
        var A = this.inputs.href.value;

        if (A == "http://" || A == "") {
          alert("You must enter a URL to Create a Link");
          return false;
        }

        this.removePane();

        if (!this.ln) {
          var B = "javascript:nicTemp();";
          this.ne.nicCommand("createlink", B);
          this.ln = this.findElm("A", "href", B);
        }

        if (this.ln) {
          this.ln.setAttributes({
            href: this.inputs.href.value,
            title: this.inputs.title.value,
            target: this.inputs.target.options[this.inputs.target.selectedIndex].value
          });
        }
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicLinkOptions);
    var nicColorOptions = {
      buttons: {
        forecolor: {
          name: __("Change Text Color"),
          type: "nicEditorColorButton",
          noClose: true
        },
        bgcolor: {
          name: __("Change Background Color"),
          type: "nicEditorBgColorButton",
          noClose: true
        }
      }
    };
    var nicEditorColorButton = nicEditorAdvancedButton.extend({
      addPane: function addPane() {
        var D = {
          0: "00",
          1: "33",
          2: "66",
          3: "99",
          4: "CC",
          5: "FF"
        };
        var H = new bkElement("DIV").setStyle({
          width: "270px"
        });

        for (var A in D) {
          for (var F in D) {
            for (var E in D) {
              var I = "#" + D[A] + D[E] + D[F];
              var C = new bkElement("DIV").setStyle({
                cursor: "pointer",
                height: "15px",
                "float": "left"
              }).appendTo(H);
              var G = new bkElement("DIV").setStyle({
                border: "2px solid " + I
              }).appendTo(C);
              var B = new bkElement("DIV").setStyle({
                backgroundColor: I,
                overflow: "hidden",
                width: "11px",
                height: "11px"
              }).addEvent("click", this.colorSelect.closure(this, I)).addEvent("mouseover", this.on.closure(this, G)).addEvent("mouseout", this.off.closure(this, G, I)).appendTo(G);

              if (!window.opera) {
                C.onmousedown = B.onmousedown = bkLib.cancelEvent;
              }
            }
          }
        }

        this.pane.append(H.noSelect());
      },
      colorSelect: function colorSelect(A) {
        this.ne.nicCommand("foreColor", A);
        this.removePane();
      },
      on: function on(A) {
        A.setStyle({
          border: "2px solid #000"
        });
      },
      off: function off(A, B) {
        A.setStyle({
          border: "2px solid " + B
        });
      }
    });
    var nicEditorBgColorButton = nicEditorColorButton.extend({
      colorSelect: function colorSelect(A) {
        this.ne.nicCommand("hiliteColor", A);
        this.removePane();
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicColorOptions);
    var nicImageOptions = {
      buttons: {
        image: {
          name: "Add Image",
          type: "nicImageButton",
          tags: ["IMG"]
        }
      }
    };
    var nicImageButton = nicEditorAdvancedButton.extend({
      addPane: function addPane() {
        this.im = this.ne.selectedInstance.selElm().parentTag("IMG");
        this.addForm({
          "": {
            type: "title",
            txt: "Add/Edit Image"
          },
          src: {
            type: "text",
            txt: "URL",
            value: "http://",
            style: {
              width: "150px"
            }
          },
          alt: {
            type: "text",
            txt: "Alt Text",
            style: {
              width: "100px"
            }
          },
          align: {
            type: "select",
            txt: "Align",
            options: {
              none: "Default",
              left: "Left",
              right: "Right"
            }
          }
        }, this.im);
      },
      submit: function submit(B) {
        var C = this.inputs.src.value;

        if (C == "" || C == "http://") {
          alert("You must enter a Image URL to insert");
          return false;
        }

        this.removePane();

        if (!this.im) {
          var A = "javascript:nicImTemp();";
          this.ne.nicCommand("insertImage", A);
          this.im = this.findElm("IMG", "src", A);
        }

        if (this.im) {
          this.im.setAttributes({
            src: this.inputs.src.value,
            alt: this.inputs.alt.value,
            align: this.inputs.align.value
          });
        }
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicImageOptions);
    var nicSaveOptions = {
      buttons: {
        save: {
          name: __("Save this content"),
          type: "nicEditorSaveButton"
        }
      }
    };
    var nicEditorSaveButton = nicEditorButton.extend({
      init: function init() {
        if (!this.ne.options.onSave) {
          this.margin.setStyle({
            display: "none"
          });
        }
      },
      mouseClick: function mouseClick() {
        var B = this.ne.options.onSave;
        var A = this.ne.selectedInstance;
        B(A.getContent(), A.elm.id, A);
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicSaveOptions);
    var nicCodeOptions = {
      buttons: {
        xhtml: {
          name: "Edit HTML",
          type: "nicCodeButton"
        }
      }
    };
    var nicCodeButton = nicEditorAdvancedButton.extend({
      width: "350px",
      addPane: function addPane() {
        this.addForm({
          "": {
            type: "title",
            txt: "Edit HTML"
          },
          code: {
            type: "content",
            value: this.ne.selectedInstance.getContent(),
            style: {
              width: "340px",
              height: "200px"
            }
          }
        });
      },
      submit: function submit(B) {
        var A = this.inputs.code.value;
        this.ne.selectedInstance.setContent(A);
        this.removePane();
      }
    });
    nicEditors.registerPlugin(nicPlugin, nicCodeOptions);
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/rating/rating.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRatingRatingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rating {\r\n  display: inline-block;\r\n  unicode-bidi: bidi-override;\r\n  color: #888888;\r\n  font-size: 300%;\r\n  width: auto;\r\n  margin: 0;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n\r\n.rating-upper {\r\n  padding: 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  display: flex;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.rating-lower {\r\n  padding: 0;\r\n  display: flex;\r\n  z-index: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlO1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yYXRpbmctdXBwZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucmF0aW5nLWxvd2VyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/rating/rating.component.ts ***!
    \***************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function srcAppSharedRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RatingComponent = function RatingComponent() {
      _classCallCheck(this, RatingComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RatingComponent.prototype, "rate", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'rating',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rating.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rating.component.css */
      "./src/app/shared/rating/rating.component.css"))["default"]]
    })], RatingComponent);
    /***/
  },

  /***/
  "./src/app/story/stories/stories.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/story/stories/stories.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryStoriesStoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  flex: 1;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mat-table {\r\n  flex: 100;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-paginator {\r\n  flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87QUFDVCIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3JpZXMvc3Rvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgZmxleDogMTAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/story/stories/stories.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/story/stories/stories.component.ts ***!
    \****************************************************/

  /*! exports provided: StoriesComponent */

  /***/
  function srcAppStoryStoriesStoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesComponent", function () {
      return StoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../story.service */
    "./src/app/story/story.service.ts");

    var StoriesComponent = /*#__PURE__*/function () {
      function StoriesComponent(storyService) {
        _classCallCheck(this, StoriesComponent);

        this.storyService = storyService;
      }

      _createClass(StoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (this.stories) this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.stories);else this.storyService.getStories().subscribe(function (value) {
            _this4.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](value);
            _this4.dataSource.paginator = _this4.paginator;
          });
        }
      }]);

      return StoriesComponent;
    }();

    StoriesComponent.ctorParameters = function () {
      return [{
        type: _story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": false
    })], StoriesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoriesComponent.prototype, "stories", void 0);
    StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "stories",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story/stories/stories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stories.component.css */
      "./src/app/story/stories/stories.component.css"))["default"]]
    })], StoriesComponent);
    /***/
  },

  /***/
  "./src/app/story/story-add/story-add.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/story/story-add/story-add.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryStoryAddStoryAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nform {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title {\r\n  flex: 5;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.price {\r\n  flex: 1;\r\n}\r\n\r\n.submit-button {\r\n  position: fixed;\r\n  bottom: 25px;\r\n  right: 25px;\r\n  z-index: 25;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnktYWRkL3N0b3J5LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS9zdG9yeS1hZGQvc3RvcnktYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZsZXg6IDU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4ucHJpY2Uge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHotaW5kZXg6IDI1O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/story/story-add/story-add.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/story/story-add/story-add.component.ts ***!
    \********************************************************/

  /*! exports provided: StoryAddComponent */

  /***/
  function srcAppStoryStoryAddStoryAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryAddComponent", function () {
      return StoryAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _story_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../story.model */
    "./src/app/story/story.model.ts");
    /* harmony import */


    var _story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../story.service */
    "./src/app/story/story.service.ts");

    var StoryAddComponent = /*#__PURE__*/function () {
      function StoryAddComponent(formbuilder, storyService) {
        _classCallCheck(this, StoryAddComponent);

        this.formbuilder = formbuilder;
        this.storyService = storyService;
      }

      _createClass(StoryAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newStoryForm = this.formbuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            text: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll(event) {}
        /* for wheel support */

      }, {
        key: "saveStory",
        value: function saveStory(value) {
          var result = new _story_model__WEBPACK_IMPORTED_MODULE_3__["Story"]();
          result.author = "";
          result.price = value.price;
          result.title = value.title;
          result.text = value.text;
          result.rating = 0;
          this.storyService.saveStory(result).subscribe(function (s) {
            console.log(s);
          });
        }
      }]);

      return StoryAddComponent;
    }();

    StoryAddComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _story_service__WEBPACK_IMPORTED_MODULE_4__["StoryService"]
      }];
    };

    StoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "story-add",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-add/story-add.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-add.component.css */
      "./src/app/story/story-add/story-add.component.css"))["default"]]
    })], StoryAddComponent);
    /***/
  },

  /***/
  "./src/app/story/story-list-view/story-list-view.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/story/story-list-view/story-list-view.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryStoryListViewStoryListViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n\r\n.story_list_view_block {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.story_list_view {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.story_createdDate {\r\n  color: #aaa;\r\n}\r\n\r\n.story_title {\r\n  margin: 10px;\r\n  font-size: 250%;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n\r\n.story_author {\r\n  margin: 10px;\r\n}\r\n\r\n.green {\r\n  background: green;\r\n  color: white;\r\n}\r\n\r\n.red {\r\n  background: crimson;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnktbGlzdC12aWV3L3N0b3J5LWxpc3Qtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnkvc3RvcnktbGlzdC12aWV3L3N0b3J5LWxpc3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RvcnlfbGlzdF92aWV3X2Jsb2NrIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3RvcnlfbGlzdF92aWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5zdG9yeV9jcmVhdGVkRGF0ZSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5zdG9yeV90aXRsZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjUwJTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbn1cclxuXHJcbi5zdG9yeV9hdXRob3Ige1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/story/story-list-view/story-list-view.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/story/story-list-view/story-list-view.component.ts ***!
    \********************************************************************/

  /*! exports provided: StoryListViewComponent */

  /***/
  function srcAppStoryStoryListViewStoryListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryListViewComponent", function () {
      return StoryListViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StoryListViewComponent = /*#__PURE__*/function () {
      function StoryListViewComponent() {
        _classCallCheck(this, StoryListViewComponent);
      }

      _createClass(StoryListViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryListViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoryListViewComponent.prototype, "story", void 0);
    StoryListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "story-list-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-list-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-list-view/story-list-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-list-view.component.css */
      "./src/app/story/story-list-view/story-list-view.component.css"))["default"]]
    })], StoryListViewComponent);
    /***/
  },

  /***/
  "./src/app/story/story-view/story-view.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/story/story-view/story-view.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryStoryViewStoryViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".story-header {\r\n  align-self: center;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n:host {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3Rvcnktdmlldy9zdG9yeS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc3Rvcnkvc3Rvcnktdmlldy9zdG9yeS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcnktaGVhZGVyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/story/story-view/story-view.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/story/story-view/story-view.component.ts ***!
    \**********************************************************/

  /*! exports provided: StoryViewComponent */

  /***/
  function srcAppStoryStoryViewStoryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryViewComponent", function () {
      return StoryViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../story.service */
    "./src/app/story/story.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var StoryViewComponent = function StoryViewComponent(sanitizer, route, router, storyService) {
      var _this5 = this;

      _classCallCheck(this, StoryViewComponent);

      this.sanitizer = sanitizer;
      this.route = route;
      this.router = router;
      this.storyService = storyService;
      this.storyService.getStory(this.route.params["value"]["id"]).subscribe(function (value) {
        _this5.story = value;
      });
    };

    StoryViewComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _story_service__WEBPACK_IMPORTED_MODULE_2__["StoryService"]
      }];
    };

    StoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-story-view",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story/story-view/story-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-view.component.css */
      "./src/app/story/story-view/story-view.component.css"))["default"]]
    })], StoryViewComponent);
    /***/
  },

  /***/
  "./src/app/story/story.model.ts":
  /*!**************************************!*\
    !*** ./src/app/story/story.model.ts ***!
    \**************************************/

  /*! exports provided: Story */

  /***/
  function srcAppStoryStoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Story", function () {
      return Story;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Story = function Story() {
      _classCallCheck(this, Story);
    };
    /***/

  },

  /***/
  "./src/app/story/story.service.ts":
  /*!****************************************!*\
    !*** ./src/app/story/story.service.ts ***!
    \****************************************/

  /*! exports provided: StoryService */

  /***/
  function srcAppStoryStoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryService", function () {
      return StoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var StoryService = /*#__PURE__*/function () {
      function StoryService(http) {
        _classCallCheck(this, StoryService);

        this.http = http;
      }

      _createClass(StoryService, [{
        key: "getStories",
        value: function getStories() {
          return this.http.get("/api/stories");
        }
      }, {
        key: "getStory",
        value: function getStory(id) {
          return this.http.get("/api/stories/".concat(id));
        }
      }, {
        key: "saveStory",
        value: function saveStory(story) {
          return this.http.post("/api/stories/save", story);
        }
      }]);

      return StoryService;
    }();

    StoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], StoryService);
    /***/
  },

  /***/
  "./src/app/user/auth/auth-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/auth/auth-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppUserAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/user/auth/token-storage.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(token, router) {
        _classCallCheck(this, AuthGuardService);

        this.token = token;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.token.logged) {
            return true;
          } else {
            this.router.navigate(["/signin"], {
              queryParams: {
                "return": state.url
              }
            });
            return false;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/user/auth/auth-interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/auth/auth-interceptor.ts ***!
    \***********************************************/

  /*! exports provided: AuthInterceptor, httpInterceptorProviders */

  /***/
  function srcAppUserAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
      return httpInterceptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/user/auth/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization';

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();

          if (token != null) {
            authReq = req.clone({
              headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
          }

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthInterceptor);
    var httpInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/user/auth/login-info.ts":
  /*!*****************************************!*\
    !*** ./src/app/user/auth/login-info.ts ***!
    \*****************************************/

  /*! exports provided: AuthLoginInfo */

  /***/
  function srcAppUserAuthLoginInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function () {
      return AuthLoginInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AuthLoginInfo = function AuthLoginInfo(email, password) {
      _classCallCheck(this, AuthLoginInfo);

      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/user/auth/signup-info.ts":
  /*!******************************************!*\
    !*** ./src/app/user/auth/signup-info.ts ***!
    \******************************************/

  /*! exports provided: SignUpInfo */

  /***/
  function srcAppUserAuthSignupInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpInfo", function () {
      return SignUpInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SignUpInfo = function SignUpInfo(nickname, email, password) {
      _classCallCheck(this, SignUpInfo);

      this.nickName = nickname;
      this.email = email;
      this.password = password;
      this.role = "user";
    };
    /***/

  },

  /***/
  "./src/app/user/auth/token-storage.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/auth/token-storage.service.ts ***!
    \****************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppUserAuthTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TOKEN_KEY = "AuthToken";
    var USERNAME_KEY = "AuthUsername";
    var AUTHORITIES_KEY = "AuthAuthorities";

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);

        this.roles = [];
        this.logged = false;
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
          this.logged = false;
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
          this.logged = true;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUsername",
        value: function saveUsername(username) {
          window.sessionStorage.removeItem(USERNAME_KEY);
          window.sessionStorage.setItem(USERNAME_KEY, username);
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return sessionStorage.getItem(USERNAME_KEY);
        }
      }, {
        key: "saveAuthorities",
        value: function saveAuthorities(authorities) {
          window.sessionStorage.removeItem(AUTHORITIES_KEY);
          window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
        }
      }, {
        key: "getAuthorities",
        value: function getAuthorities() {
          var _this6 = this;

          this.roles = [];

          if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
              _this6.roles.push(authority.authority);
            });
          }

          return this.roles;
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TokenStorageService);
    /***/
  },

  /***/
  "./src/app/user/log-in/log-in.component.css":
  /*!**************************************************!*\
    !*** ./src/app/user/log-in/log-in.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLogInLogInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n  width: 100%;\n}\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n.login-wrapper .mat-flat-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #fff7fa;\n}\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n:host {\n  align-self: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxuLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDQwcHggNzBweCA1MHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY3ZmE7XG59XG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDMzMHB4O1xufVxuLmJveC5iYWNrIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdG9wOiAtMjBweDtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbn1cbi5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHotaW5kZXg6IC0xO1xufVxuOmhvc3Qge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/log-in/log-in.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/log-in/log-in.component.ts ***!
    \*************************************************/

  /*! exports provided: LogInComponent */

  /***/
  function srcAppUserLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return LogInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/token-storage.service */
    "./src/app/user/auth/token-storage.service.ts");
    /* harmony import */


    var _auth_login_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/login-info */
    "./src/app/user/auth/login-info.ts");

    var LogInComponent = /*#__PURE__*/function () {
      function LogInComponent(fb, userService, router, tokenStorage, route) {
        _classCallCheck(this, LogInComponent);

        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.route = route;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = "";
        this.roles = [];
        this["return"] = "";
        this.signInForm = this.fb.group({
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          password: ["", [
            /*Validators.pattern('regex'),
             Validators.maxLength(25),
             Validators.minLength(6),*/
          ]]
        });
      }

      _createClass(LogInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
          }

          this.route.queryParams.subscribe(function (params) {
            return _this7["return"] = params["return"] || "/";
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          console.log(this.signInForm);
          this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_6__["AuthLoginInfo"](this.email.value, this.password.value);
          this.userService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this8.tokenStorage.saveToken(data.accessToken);

            _this8.tokenStorage.saveUsername(data.username);

            _this8.tokenStorage.saveAuthorities(data.authorities);

            _this8.isLoginFailed = false;
            _this8.isLoggedIn = true;
            _this8.roles = _this8.tokenStorage.getAuthorities(); //this.reloadPage();

            _this8.router.navigateByUrl(_this8["return"]);
          }, function (error) {
            console.log(error);
            _this8.errorMessage = error.error.message;
            _this8.isLoginFailed = true;
          });
        }
      }, {
        key: "email",
        get: function get() {
          return this.signInForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.signInForm.get("password");
        }
      }]);

      return LogInComponent;
    }();

    LogInComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-log-in",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./log-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/log-in/log-in.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./log-in.component.css */
      "./src/app/user/log-in/log-in.component.css"))["default"]]
    })], LogInComponent);
    /***/
  },

  /***/
  "./src/app/user/register/register.component.css":
  /*!******************************************************!*\
    !*** ./src/app/user/register/register.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n  width: 100%;\n}\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n.login-wrapper .mat-flat-button {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #fff7fa;\n}\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n:host {\n  align-self: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4ubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG4ubG9naW4td3JhcHBlciAubWF0LWZsYXQtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjdmYTtcbn1cbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHotaW5kZXg6IDU7XG4gIG1heC13aWR0aDogMzMwcHg7XG59XG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgei1pbmRleDogLTE7XG59XG46aG9zdCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppUserRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_signup_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/signup-info */
    "./src/app/user/auth/signup-info.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, userService, router) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.Roles = ["Administrator", "Writer", "Reader"];
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = "";
        this.signUpForm = this.fb.group({
          nickName: ["", []],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          password: ["", [
            /*Validators.pattern('regex'),
             Validators.maxLength(25),
             Validators.minLength(6),*/
          ]],
          role: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(RegisterComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          console.log(this.signUpForm);
          this.signupInfo = new _auth_signup_info__WEBPACK_IMPORTED_MODULE_5__["SignUpInfo"](this.nickName.value, this.email.value, this.password.value);
          this.userService.signUp(this.signupInfo).subscribe(function (data) {
            console.log(data);
            _this9.isSignedUp = true;
            _this9.isSignUpFailed = false;
          }, function (error) {
            console.log(error);
            _this9.errorMessage = error.error.message;
            _this9.isSignUpFailed = true;
          });
        }
      }, {
        key: "nickName",
        get: function get() {
          return this.signUpForm.get("nickName");
        }
      }, {
        key: "email",
        get: function get() {
          return this.signUpForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.signUpForm.get("password");
        }
      }, {
        key: "role",
        get: function get() {
          return this.signUpForm.get("role");
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/user/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/user/reset-password/reset-password.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/user/reset-password/reset-password.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card {\r\n  padding: 16px 16px 0 16px;\r\n}\r\n\r\n:host {\r\n  align-self: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppUserResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(auth, router) {
        _classCallCheck(this, ResetPasswordComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {//this.auth.resetPassword(this.email)
          //.then(()=> this.router.navigate(['/login']))
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reset-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/user/reset-password/reset-password.component.css"))["default"]]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/user-view/user-view.component.css":
  /*!********************************************************!*\
    !*** ./src/app/user/user-view/user-view.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserViewUserViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-view/user-view.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/user-view/user-view.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserViewComponent */

  /***/
  function srcAppUserUserViewUserViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewComponent", function () {
      return UserViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserViewComponent = /*#__PURE__*/function () {
      function UserViewComponent() {
        _classCallCheck(this, UserViewComponent);
      }

      _createClass(UserViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserViewComponent;
    }();

    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-view/user-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-view.component.css */
      "./src/app/user/user-view/user-view.component.css"))["default"]]
    })], UserViewComponent);
    /***/
  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
      })
    };

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.loginUrl = "/api/users/auth/signin";
        this.signupUrl = "/api/users/auth/signup";
      }

      _createClass(UserService, [{
        key: "attemptAuth",
        value: function attemptAuth(credentials) {
          return this.http.post(this.loginUrl, credentials, httpOptions);
        }
      }, {
        key: "signUp",
        value: function signUp(info) {
          return this.http.post(this.signupUrl, info, httpOptions);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\Tengu_Portal\src\main\resources\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map