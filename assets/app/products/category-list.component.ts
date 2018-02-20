import { Component, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { ProductService } from "./product.service";


@Component({
    selector :'app-category-list',
    template : `
    <div class="ui three column grid">
    <app-category
    [category]="category" 
    *ngFor="let category of categories"></app-category>
    </div>
    `
})
export class CategoryListComponent implements OnInit {

    categories : Category[] ;

    constructor(private productService:ProductService) {

    }
 
    onEditClicked(msg, data) {
        //msg.content=data;
    }

    ngOnInit() {
       this.productService.getCategories().subscribe(           
           (categories:Category[]) => {           
               this.categories = categories;
           }
       );     
    }
}