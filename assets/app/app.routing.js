import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { CategoryListComponent } from "./products/category-list.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'category', component: CategoryListComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
