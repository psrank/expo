
import {Component, ViewChild} from 'angular2/core';
import { ProductCategoryService} from "../services/product-categories.service";
import {SuppliersService} from "../services/suppliers.service";
import {IProductCategory} from "../interfaces/productCategory";
import {ISupplier} from "../interfaces/supplier";
import {ProductDetailsComponent} from "./product-details.component";


@Component({
    selector: 'expo-product-pricing',
    template: `<div>
                    <h1 class="page-header">Product pricing</h1>
                    <form>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="selSupplier">Supplier</label>
                                <select class="form-control" id="selSupplier" (change)="onSupplierChange($event.target.value)">
                                    <option></option>
                                    <option *ngFor='#supplier of suppliersList' >{{supplier.SupplierName}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="selProduct">Product</label>
                                <select class="form-control" id="selProduct" (change)="onProductChange($event.target.value)">
                                    <option></option>
                                    <option *ngFor='#productCategory of productCategoryList'  >{{productCategory.ProductCategoryName}}</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <expo-product-details></expo-product-details>`,
    directives: [ProductDetailsComponent],
    providers: [ProductCategoryService, SuppliersService]
})
export class ProductPricingComponent {  //
    errorMessage:string;
    productCategoryList: Array<IProductCategory>;
    suppliersList: Array<ISupplier>;
    selectedSupplier: string = null;
    selectedProduct: string = null;
    @ViewChild(ProductDetailsComponent) detailsComponent: ProductDetailsComponent;

    constructor(private _productCategoryService:ProductCategoryService,
                private _suppliersService:SuppliersService) {

    }

    ngOnInit():void {
        this._suppliersService.getSuppliers()
            .subscribe(
                dataitems => this.suppliersList = dataitems,
                error => this.errorMessage = <any>error);

        this._productCategoryService.getProductCategories()
            .subscribe(
                dataitems => this.productCategoryList = dataitems,
                error => this.errorMessage = <any>error);
    }

    onSupplierChange(value) {
        console.log(value);
        this.selectedSupplier = value;
        this.detailsComponent.filterItems(this.selectedSupplier, this.selectedProduct);
    }

    onProductChange(value) {
        console.log(value);
        this.selectedProduct = value;
        this.detailsComponent.filterItems(this.selectedSupplier, this.selectedProduct);
    }
}