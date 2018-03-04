import {Component, Input, OnInit} from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
selector : 'app-product-detail',
templateUrl: './product-detail.component.html',
styles: [`  
  .ui.image {
    width:300px;
    height:250px;
    background-size: cover;
    max-height: 250px;
    max-width: 300px;
    min-height: 250px;
    min-width: 300px;
  }
  
`]
})
export class ProductDetailComponent implements OnInit {
    id:string;
    product : Product ;
    products : Product[] ;
    sub : any;
    constructor(private productService:ProductService, private _route:ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = params['id'].toString(); 
                       this.productService.getProductDetail(this.id.toString()).subscribe(           
                (products:Product[]) => {           
                    if ( products.length>0) {
                        this.product = products[0];
                    }
                }
            );   
         });
    }  
}