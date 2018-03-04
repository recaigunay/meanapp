import {Component, Input} from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import { Router } from "@angular/router";

@Component({
selector : 'app-product',
templateUrl: './product.component.html',
styles: [`
.ui.card {
    position: relative;
    margin: auto;
    display: inline-block;   
    width:300px;
    height:350px;    
  }
  
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
export class ProductComponent {
@Input() product : Product;
color="red";

constructor(private productService:ProductService,private _router:Router) {

}
navigateProductDetail(id) {
    this._router.navigate(['/products', id]);
}

}