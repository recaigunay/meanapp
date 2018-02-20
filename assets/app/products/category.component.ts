import {Component, Input} from "@angular/core";
import { Category } from "./category.model";
import { ProductService } from "./product.service";

@Component({
selector : 'app-category',
templateUrl: './category.component.html',
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
export class CategoryComponent {
@Input() category : Category;
color="red";

constructor(private productService:ProductService) {

}
onEdit() {
    alert("merhaba");
    //this.productService.editMessage(this.category)
}

}