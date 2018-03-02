import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
    selector :'app-product-list',
    template : `
    <div class="ui three column grid">
    <app-product
    [product]="product" 
    *ngFor="let product of products"></app-product>
    </div>
    `
})
export class ProductListComponent implements OnInit,OnDestroy   {
    id:string;
    products : Product[] ;
    sub : any;
    constructor(private productService:ProductService, private _route:ActivatedRoute) {

    }
 
    onEditClicked(msg, data) {
        //msg.content=data;
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = params['id'].toString();    
            this.productService.getProducts(this.id.toString()).subscribe(           
                (products:Product[]) => {           
                    this.products = products;
                }
            );   
         });

        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}