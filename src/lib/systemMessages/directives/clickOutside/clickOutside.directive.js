"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var IFCClickOutsideDirective = (function () {
    function IFCClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new core_1.EventEmitter();
    }
    IFCClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    return IFCClickOutsideDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IFCClickOutsideDirective.prototype, "clickOutside", void 0);
__decorate([
    core_1.HostListener('document:click', ['$event', '$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
    __metadata("design:returntype", void 0)
], IFCClickOutsideDirective.prototype, "onClick", null);
IFCClickOutsideDirective = __decorate([
    core_1.Directive({
        selector: '[clickOutside]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], IFCClickOutsideDirective);
exports.IFCClickOutsideDirective = IFCClickOutsideDirective;
//# sourceMappingURL=clickOutside.directive.js.map