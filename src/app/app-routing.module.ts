import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {  HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductManageraddComponent } from './product-manageradd/product-manageradd.component'

const routes: Routes = [
  { path: '', redirectTo: '/home/manageproduct', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children:[
      {path:'productlist',component:ProductListComponent},
      {path:'manageproduct',component:ProductManagerComponent},
      {path:'manageproduct/add',component:ProductManageraddComponent}

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
