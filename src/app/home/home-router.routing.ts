import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'productlist', loadChildren: '../productList/productList.module#ProjectListModule' },
    ]
   },
];

export const HomeRouterRoutes = RouterModule.forChild(routes);
