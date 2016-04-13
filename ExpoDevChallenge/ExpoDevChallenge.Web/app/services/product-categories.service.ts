/**
 * Created by peto on 12/04/2016.
 */

import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import {IProductCategory} from "../interfaces/productCategory";


@Injectable()
export class ProductCategoryService {
    private _productUrl = 'http://localhost:63487/api/ProductCategories';

    constructor(private _http: Http) { }

    getProductCategories(): Observable<IProductCategory[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProductCategory>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}