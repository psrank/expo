/**
 * Created by peto on 12/04/2016.
 */

import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import {ISupplier} from "../interfaces/supplier";


@Injectable()
export class SuppliersService {
    private _url = 'http://localhost:63487/api/Suppliers';

    constructor(private _http: Http) { }

    getSuppliers(): Observable<ISupplier[]> {
        return this._http.get(this._url)
            .map((response: Response) => <ISupplier>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}