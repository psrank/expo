/**
 * Created by peto on 12/04/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import { IProductSupplier} from "../interfaces/productSupplier";
import {ProductSuppliersService} from "../services/products-suppliers.service";


@Component({
    selector: 'expo-product-details',
    template: `<div>
                    <h2 class="sub-header">Product details</h2>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Supplier</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor='#product of productList'>
                                    <td>{{product.Id}}</td>
                                    <td>{{product.Supplier}}</td>
                                    <td>{{product.Product}}</td>
                                    <td>{{product.Price}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,
    providers: [ProductSuppliersService]
})
export class ProductDetailsComponent implements OnInit {
    supplier: number;
    product: number;
    errorMessage:string;
    productList: Array<IProductSupplier>;

    constructor(private _productsService:ProductSuppliersService) {

    }

    ngOnInit():void {
        this.callProductSuppliers(null, null);
    }

    filterItems(supplierId: string, productId: string){
        this.callProductSuppliers(supplierId, productId);
    }

    private callProductSuppliers(supplierId?: string, productId?: string) {
        this._productsService.getProductsSuppliers(supplierId, productId)
            .subscribe(
                dataitems => this.productList = dataitems,
                error => this.errorMessage = <any>error);
    }
}