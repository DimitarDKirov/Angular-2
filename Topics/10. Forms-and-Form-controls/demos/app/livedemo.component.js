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
var core_1 = require('@angular/core');
var DemoComponent = (function () {
    function DemoComponent() {
        this.superhero = {
            name: 'Some name',
            secretIdentity: 'Identity'
        };
    }
    Object.defineProperty(DemoComponent.prototype, "spy", {
        get: function () {
            return JSON.stringify(this.superhero);
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.updateName = function () {
        this.superhero.name += new Date();
    };
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'live-demo',
            template: "\n<form action=\"/superhero-create\" method='POST'>\n<input type=\"text\" name=\"name\" [(ngModel)]=\"superhero.name\"/>\n<input type=\"text\" name=\"superheroIdentity\" [(ngModel)]=\"superhero.secretIdentity\"/>\n<button (click)=\"onCreate()\">Create</button>\n</form>\n<a href=\"#\" (click)=\"updateName()\">Update</a>\n{{spy}}\n"
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=livedemo.component.js.map