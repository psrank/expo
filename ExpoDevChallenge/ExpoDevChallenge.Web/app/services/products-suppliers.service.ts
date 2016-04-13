/**
 * Created by peto on 12/04/2016.
 */

import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { IProductSupplier} from "../interfaces/productSupplier";


@Injectable()
export class ProductSuppliersService {
    private _url = 'http://localhost:63487/api/ProductsSuppliers';

    constructor(private _http: Http) { }

    getProductsSuppliers(supplierId: string, productCategoryId: string): Observable<IProductSupplier[]> {
        return this._http.get(this.buildUrl( this._url, supplierId, productCategoryId))
            .map((response: Response) => <IProductSupplier>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private buildUrl(url: string, supplier?: string, productCategory?: string) : string {

        let paramString: string = '';
        if(supplier !== null && productCategory !== null){
            paramString = '?supplier=' + encodeURIComponent(supplier) + '&productCategory=' + encodeURIComponent(productCategory);
        }
        else if(supplier !== null && productCategory === null){
            paramString = '?supplier=' + encodeURIComponent(supplier);
        }
        else if(supplier === null && productCategory !== null){
            paramString = '?productCategory=' + encodeURIComponent(productCategory);
        }

        return url + paramString;
    }

}