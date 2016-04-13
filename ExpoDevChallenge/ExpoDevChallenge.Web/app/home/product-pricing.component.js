System.register(['angular2/core', "../services/product-categories.service", "../services/suppliers.service", "./product-details.component"], function(exports_1, context_1) {
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
    var core_1, product_categories_service_1, suppliers_service_1, product_details_component_1;
    var ProductPricingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_categories_service_1_1) {
                product_categories_service_1 = product_categories_service_1_1;
            },
            function (suppliers_service_1_1) {
                suppliers_service_1 = suppliers_service_1_1;
            },
            function (product_details_component_1_1) {
                product_details_component_1 = product_details_component_1_1;
            }],
        execute: function() {
            ProductPricingComponent = (function () {
                function ProductPricingComponent(_productCategoryService, _suppliersService) {
                    this._productCategoryService = _productCategoryService;
                    this._suppliersService = _suppliersService;
                    this.selectedSupplier = null;
                    this.selectedProduct = null;
                }
                ProductPricingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._suppliersService.getSuppliers()
                        .subscribe(function (dataitems) { return _this.suppliersList = dataitems; }, function (error) { return _this.errorMessage = error; });
                    this._productCategoryService.getProductCategories()
                        .subscribe(function (dataitems) { return _this.productCategoryList = dataitems; }, function (error) { return _this.errorMessage = error; });
                };
                ProductPricingComponent.prototype.onSupplierChange = function (value) {
                    console.log(value);
                    this.selectedSupplier = value;
                    this.detailsComponent.filterItems(this.selectedSupplier, this.selectedProduct);
                };
                ProductPricingComponent.prototype.onProductChange = function (value) {
                    console.log(value);
                    this.selectedProduct = value;
                    this.detailsComponent.filterItems(this.selectedSupplier, this.selectedProduct);
                };
                __decorate([
                    core_1.ViewChild(product_details_component_1.ProductDetailsComponent), 
                    __metadata('design:type', product_details_component_1.ProductDetailsComponent)
                ], ProductPricingComponent.prototype, "detailsComponent", void 0);
                ProductPricingComponent = __decorate([
                    core_1.Component({
                        selector: 'expo-product-pricing',
                        template: "<div>\n                    <h1 class=\"page-header\">Product pricing</h1>\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"selSupplier\">Supplier</label>\n                                <select class=\"form-control\" id=\"selSupplier\" (change)=\"onSupplierChange($event.target.value)\">\n                                    <option></option>\n                                    <option *ngFor='#supplier of suppliersList' >{{supplier.SupplierName}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"selProduct\">Product</label>\n                                <select class=\"form-control\" id=\"selProduct\" (change)=\"onProductChange($event.target.value)\">\n                                    <option></option>\n                                    <option *ngFor='#productCategory of productCategoryList'  >{{productCategory.ProductCategoryName}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <expo-product-details></expo-product-details>",
                        directives: [product_details_component_1.ProductDetailsComponent],
                        providers: [product_categories_service_1.ProductCategoryService, suppliers_service_1.SuppliersService]
                    }), 
                    __metadata('design:paramtypes', [product_categories_service_1.ProductCategoryService, suppliers_service_1.SuppliersService])
                ], ProductPricingComponent);
                return ProductPricingComponent;
            }());
            exports_1("ProductPricingComponent", ProductPricingComponent);
        }
    }
});
//# sourceMappingURL=product-pricing.component.js.map