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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var BaseServiceImpl = (function () {
    function BaseServiceImpl(url, http) {
        this.url = url;
        this.http = http;
    }
    BaseServiceImpl.prototype.create = function (entity) {
        return this.http.post(this.url, JSON.stringify(entity))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BaseServiceImpl.prototype.read = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BaseServiceImpl.prototype.update = function (id, entity) {
        var url = this.url + "/" + id;
        return this.http.put(url, JSON.stringify(entity))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BaseServiceImpl.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BaseServiceImpl.prototype.findOne = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BaseServiceImpl.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BaseServiceImpl;
}());
BaseServiceImpl = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, http_1.Http])
], BaseServiceImpl);
exports.BaseServiceImpl = BaseServiceImpl;
//# sourceMappingURL=base.service.impl.js.map