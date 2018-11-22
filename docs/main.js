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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\r\n#slider,\r\n.wrap,\r\n.slide-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntd{\r\n    padding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadAllPresentsTillToday()\" width=\"100%\" height=\"100%\">\n<table align=\"center\">\n  <tr>\n    <td *ngIf=\"day8h; else day8scratched\">\n        <img src=\".\\assets\\AdventskalenderIcons\\8h.png\" (click)=\"scratchOpenToday('8')\">  \n    </td>\n    <td *ngIf=\"day21h; else day21scratched\">\n        <img src=\".\\assets\\AdventskalenderIcons\\21h.png\" (click)=\"scratchOpenToday('21')\">  \n    </td> \n    <td *ngIf=\"day23h; else day23scratched\">\n        <img src=\".\\assets\\AdventskalenderIcons\\23h.png\" (click)=\"scratchOpenToday('23')\">  \n    </td> \n\n  </tr>\n\n\n  <tr>\n      <td *ngIf=\"day6h; else day6scratched\">\n          <img src=\".\\assets\\AdventskalenderIcons\\6h.png\" (click)=\"scratchOpenToday('6')\">  \n      </td> \n      <td *ngIf=\"day20h; else day20scratched\">\n          <img src=\".\\assets\\AdventskalenderIcons\\20h.png\" (click)=\"scratchOpenToday('20')\">  \n      </td> \n      <td *ngIf=\"day10h; else day10scratched\">\n          <img src=\".\\assets\\AdventskalenderIcons\\10h.png\" (click)=\"scratchOpenToday('10')\">  \n      </td> \n    </tr>\n\n\n    <tr>\n        <td *ngIf=\"day17h; else day17scratched\">\n            <img src=\".\\assets\\AdventskalenderIcons\\17h.png\" (click)=\"scratchOpenToday('17')\">  \n        </td>\n        <td *ngIf=\"day11h; else day11scratched\">\n            <img src=\".\\assets\\AdventskalenderIcons\\11h.png\" (click)=\"scratchOpenToday('11')\">  \n        </td> \n        <td *ngIf=\"day1h; else day1scratched\">\n            <img src=\".\\assets\\AdventskalenderIcons\\1h.png\" (click)=\"scratchOpenToday('1')\">  \n        </td> \n      </tr>\n\n\n      <tr>\n          <td *ngIf=\"day9h; else day9scratched\">\n              <img src=\".\\assets\\AdventskalenderIcons\\9h.png\" (click)=\"scratchOpenToday('9')\">  \n          </td>\n          <td *ngIf=\"day3h; else day3scratched\">\n              <img src=\".\\assets\\AdventskalenderIcons\\3h.png\" (click)=\"scratchOpenToday('3')\">  \n          </td> \n          <td *ngIf=\"day5h; else day5scratched\">\n              <img src=\".\\assets\\AdventskalenderIcons\\5h.png\" (click)=\"scratchOpenToday('5')\">  \n          </td> \n        </tr>\n      \n\n        <tr>\n            <td *ngIf=\"day12h; else day12scratched\">\n                <img src=\".\\assets\\AdventskalenderIcons\\12h.png\" (click)=\"scratchOpenToday('12')\">  \n            </td>\n            <td *ngIf=\"day15h; else day15scratched\">\n                <img src=\".\\assets\\AdventskalenderIcons\\15h.png\" (click)=\"scratchOpenToday('15')\">  \n            </td> \n            <td *ngIf=\"day22h; else day22scratched\">\n                <img src=\".\\assets\\AdventskalenderIcons\\22h.png\" (click)=\"scratchOpenToday('22')\">  \n            </td> \n          </tr>\n        \n    \n          <tr>\n              <td *ngIf=\"day18h; else day18scratched\">\n                  <img src=\".\\assets\\AdventskalenderIcons\\18h.png\" (click)=\"scratchOpenToday('18')\">  \n              </td>\n              <td *ngIf=\"day4h; else day4scratched\">\n                  <img src=\".\\assets\\AdventskalenderIcons\\4h.png\" (click)=\"scratchOpenToday('4')\">  \n              </td> \n              <td *ngIf=\"day13h; else day13scratched\">\n                  <img src=\".\\assets\\AdventskalenderIcons\\13h.png\" (click)=\"scratchOpenToday('13')\">  \n              </td> \n            </tr>\n          \n  \n            <tr>\n                <td *ngIf=\"day24h; else day24scratched\">\n                    <img src=\".\\assets\\AdventskalenderIcons\\24h.png\" (click)=\"scratchOpenToday('24')\">  \n                </td>\n                <td *ngIf=\"day19h; else day19scratched\">\n                    <img src=\".\\assets\\AdventskalenderIcons\\19h.png\" (click)=\"scratchOpenToday('19')\">  \n                </td> \n                <td *ngIf=\"day14h; else day14scratched\">\n                    <img src=\".\\assets\\AdventskalenderIcons\\14h.png\" (click)=\"scratchOpenToday('14')\">  \n                </td> \n              </tr>\n\n\n              <tr>\n                  <td *ngIf=\"day2h; else day2scratched\">\n                      <img src=\".\\assets\\AdventskalenderIcons\\2h.png\" (click)=\"scratchOpenToday('2')\">  \n                  </td>\n                  <td *ngIf=\"day16h; else day16scratched\">\n                      <img src=\".\\assets\\AdventskalenderIcons\\16h.png\" (click)=\"scratchOpenToday('16')\">  \n                  </td> \n                  <td *ngIf=\"day7h; else day7scratched\">\n                      <img src=\".\\assets\\AdventskalenderIcons\\7h.png\" (click)=\"scratchOpenToday('7')\">  \n                  </td> \n                </tr>\n</table>\n</div>\n<ng-template #day1scratched>\n<td>\n    <img src=\".\\assets\\AdventskalenderIcons\\1o.png\">\n</td>\n</ng-template>\n\n<ng-template #day2scratched>\n    <td>\n    <img src=\".\\assets\\AdventskalenderIcons\\2o.png\">\n</td>\n</ng-template>\n\n<ng-template #day3scratched>\n<td>\n    <img src=\".\\assets\\AdventskalenderIcons\\3o.png\">\n</td>\n</ng-template>\n\n<ng-template #day4scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\4o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day5scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\5o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day6scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\6o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day7scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\7o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day8scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\8o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day9scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\9o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day10scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\10o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day11scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\11o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day12scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\12o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day13scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\13o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day14scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\14o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day15scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\15o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day16scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\16o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day17scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\17o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day18scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\18o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day19scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\19o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day20scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\20o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day21scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\21o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day22scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\22o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day23scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\23o.png\">\n        </td>\n      </ng-template>\n      \n      <ng-template #day24scratched>\n        <td>\n          <img src=\".\\assets\\AdventskalenderIcons\\24o.png\">\n        </td>\n      </ng-template>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Adventskalender';
        this.arrayOfDates = new Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
        this.day24h = true;
        this.day23h = true;
        this.day22h = true;
        this.day21h = true;
        this.day20h = true;
        this.day19h = true;
        this.day18h = true;
        this.day17h = true;
        this.day16h = true;
        this.day15h = true;
        this.day14h = true;
        this.day13h = true;
        this.day12h = true;
        this.day11h = true;
        this.day10h = true;
        this.day9h = true;
        this.day8h = true;
        this.day7h = true;
        this.day6h = true;
        this.day5h = true;
        this.day4h = true;
        this.day3h = true;
        this.day2h = true;
        this.day1h = true;
        this.checkBox = false;
    }
    AppComponent.prototype.scratchOpenToday = function (dayToScratch) {
        var numberOfToday = new Date().getDate();
        var month = new Date().getMonth();
        if (month == 11) {
            if (+dayToScratch == numberOfToday) {
                switch (+dayToScratch) {
                    case 1:
                        this.day1h = false;
                        break;
                    case 1:
                        this.day1h = false;
                        break;
                    case 2:
                        this.day2h = false;
                        break;
                    case 3:
                        this.day3h = false;
                        break;
                    case 4:
                        this.day4h = false;
                        break;
                    case 5:
                        this.day5h = false;
                        break;
                    case 6:
                        this.day6h = false;
                        break;
                    case 7:
                        this.day7h = false;
                        break;
                    case 8:
                        this.day8h = false;
                        break;
                    case 9:
                        this.day9h = false;
                        break;
                    case 10:
                        this.day10h = false;
                        break;
                    case 11:
                        this.day11h = false;
                        break;
                    case 12:
                        this.day12h = false;
                        break;
                    case 13:
                        this.day13h = false;
                        break;
                    case 14:
                        this.day14h = false;
                        break;
                    case 15:
                        this.day15h = false;
                        break;
                    case 16:
                        this.day16h = false;
                        break;
                    case 17:
                        this.day17h = false;
                        break;
                    case 18:
                        this.day18h = false;
                        break;
                    case 19:
                        this.day19h = false;
                        break;
                    case 20:
                        this.day20h = false;
                        break;
                    case 21:
                        this.day21h = false;
                        break;
                    case 22:
                        this.day22h = false;
                        break;
                    case 23:
                        this.day23h = false;
                        break;
                    case 24:
                        this.day24h = false;
                        break;
                }
            }
        }
    };
    AppComponent.prototype.presentsForToday = function () {
        var dayOfDec = new Date().getDay();
        for (var i = 0; i <= dayOfDec; i++) {
            this.arrayOfDates[i] = true;
        }
        return true;
    };
    AppComponent.prototype.loadAllPresentsTillToday = function () {
        var todayMinus1 = new Date().getDate();
        var month = new Date().getMonth();
        if (month == 11 || new Date().getFullYear() != 2018) {
            if (new Date().getFullYear() != 2018) {
                todayMinus1 = 25;
            }
            switch (todayMinus1) {
                case 1:
                    break;
                case 2:
                    this.day1h = false;
                    break;
                case 3:
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 4:
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 5:
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 6:
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 7:
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 8:
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 9:
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 10:
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 11:
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 12:
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 13:
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 14:
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 15:
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 16:
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 17:
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 18:
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 19:
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 20:
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 21:
                    this.day20h = false;
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 22:
                    this.day21h = false;
                    this.day20h = false;
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 23:
                    this.day22h = false;
                    this.day21h = false;
                    this.day20h = false;
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 24:
                    this.day23h = false;
                    this.day22h = false;
                    this.day21h = false;
                    this.day20h = false;
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
                case 25:
                    this.day24h = false;
                    this.day23h = false;
                    this.day22h = false;
                    this.day21h = false;
                    this.day20h = false;
                    this.day19h = false;
                    this.day18h = false;
                    this.day17h = false;
                    this.day16h = false;
                    this.day15h = false;
                    this.day14h = false;
                    this.day13h = false;
                    this.day12h = false;
                    this.day11h = false;
                    this.day10h = false;
                    this.day9h = false;
                    this.day8h = false;
                    this.day7h = false;
                    this.day6h = false;
                    this.day5h = false;
                    this.day4h = false;
                    this.day3h = false;
                    this.day2h = false;
                    this.day1h = false;
                    break;
            }
        }
        return true;
    };
    AppComponent.prototype.openNextPresent = function () {
        this.checkBox = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dami\Desktop\AdvKalender\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map