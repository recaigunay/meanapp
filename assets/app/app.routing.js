import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { CategoryListComponent } from "./products/category-list.component";
import { ProductListComponent } from "./products/product-list.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'categories', component: CategoryListComponent },
    { path: 'categories/:id', component: ProductListComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
