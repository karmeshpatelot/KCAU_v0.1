import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch, Product } from '@admin/core/models/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getBranch(params?: any) {
        return this.http.get<any>('assets/demo/data/branch.json',{ params: params })
            .toPromise()
            .then(res => res as Branch[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getAttendances(params?: any) {
        return this.http.get<any>('http://192.168.1.65:453/api/v1/GetAttendances?month=9',{ params: params })
            .toPromise()
            .then(res => res as Branch[])
            .then(data => data);
    }
}
