System.register(['angular2/core', "../services/products-suppliers.service"], function(exports_1, context_1) {
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
    var core_1, products_suppliers_service_1;
    var ProductDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_suppliers_service_1_1) {
                products_suppliers_service_1 = products_suppliers_service_1_1;
            }],
        execute: function() {
            ProductDetailsComponent = (function () {
                function ProductDetailsComponent(_productsService) {
                    this._productsService = _productsService;
                }
                ProductDetailsComponent.prototype.ngOnInit = function () {
                    this.callProductSuppliers(null, null);
                };
                ProductDetailsComponent.prototype.filterItems = function (supplierId, productId) {
                    this.callProductSuppliers(supplierId, productId);
                };
                ProductDetailsComponent.prototype.callProductSuppliers = function (supplierId, productId) {
                    var _this = this;
                    this._productsService.getProductsSuppliers(supplierId, productId)
                        .subscribe(function (dataitems) { return _this.productList = dataitems; }, function (error) { return _this.errorMessage = error; });
                };
                ProductDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'expo-product-details',
                        template: "<div>\n                    <h2 class=\"sub-header\">Product details</h2>\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Supplier</th>\n                                    <th>Product</th>\n                                    <th>Price</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='#product of productList'>\n                                    <td>{{product.Id}}</td>\n                                    <td>{{product.Supplier}}</td>\n                                    <td>{{product.Product}}</td>\n                                    <td>{{product.Price}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>",
                        providers: [products_suppliers_service_1.ProductSuppliersService]
                    }), 
                    __metadata('design:paramtypes', [products_suppliers_service_1.ProductSuppliersService])
                ], ProductDetailsComponent);
                return ProductDetailsComponent;
            }());
            exports_1("ProductDetailsComponent", ProductDetailsComponent);
        }
    }
});
//# sourceMappingURL=product-details.component.js.map