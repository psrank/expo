/**
 * Created by peto on 12/04/2016.
 */
System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var ProductSuppliersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ProductSuppliersService = (function () {
                function ProductSuppliersService(_http) {
                    this._http = _http;
                    this._url = 'http://localhost:63487/api/ProductsSuppliers';
                }
                ProductSuppliersService.prototype.getProductsSuppliers = function (supplierId, productCategoryId) {
                    return this._http.get(this.buildUrl(this._url, supplierId, productCategoryId))
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductSuppliersService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ProductSuppliersService.prototype.buildUrl = function (url, supplier, productCategory) {
                    var paramString = '';
                    if (supplier !== null && productCategory !== null) {
                        paramString = '?supplier=' + encodeURIComponent(supplier) + '&productCategory=' + encodeURIComponent(productCategory);
                    }
                    else if (supplier !== null && productCategory === null) {
                        paramString = '?supplier=' + encodeURIComponent(supplier);
                    }
                    else if (supplier === null && productCategory !== null) {
                        paramString = '?productCategory=' + encodeURIComponent(productCategory);
                    }
                    return url + paramString;
                };
                ProductSuppliersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductSuppliersService);
                return ProductSuppliersService;
            }());
            exports_1("ProductSuppliersService", ProductSuppliersService);
        }
    }
});
//# sourceMappingURL=products-suppliers.service.js.map