import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'; 
import { LoginComponent } from './login/login.component';
import { ListProductsComponent } from './list-products/list-products.component';
export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'list-products', component: ListProductsComponent }
];
