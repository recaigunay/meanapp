import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from './category-list.component';
import { CommonModule } from "@angular/common";
import { ProductService } from "./product.service";


@NgModule({
    declarations : [
        CategoryComponent,
        CategoryListComponent      
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    providers:[ProductService]
})
export class ProductModule {


}