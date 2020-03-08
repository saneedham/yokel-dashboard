import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface document {
    _id: string;
    _rev:string;
    name: string;
    weight: string;
    description:string;
    ingredients: {
        ingredient: string;
    }
    stad_adds:{
        additive: string;
    }
    photo: string;
    photo_alt: string;
    nonvat: number;
    vatrate: number;
    stock: number;
    stockvalue: number;
    allergens: string;
}

interface Product {
    id: string;
    key: string;
    value: {
        rev: string;
    }
    doc: document;   
}

export interface Products {
    totalrows: number;
    offset:string;
    rows: {
        product: Product;
    }
}

@Injectable()
export class InventoryService {
    
    constructor(private http: HttpClient ) {}

    get_products(){
        return this.http.get('http://192.168.0.4:5984/products-test/_all_docs?include_docs=true&attachements=true')
    }

    get_product(id: string){
        return this.http.get('http://192.168.0.4:5984/products-test/'+ id);
    }
    
}