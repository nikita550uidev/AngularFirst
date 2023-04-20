import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductComponent } from './product/product.component';
import {RoleGuard} from "./role.guard";
import {AdminComponent} from "./admin/admin.component";
import {NotFoundComponent} from "./not-found/not-found.component";
 const routes: Routes = [
     {
         path: 'admin',
         component: AdminComponent,
         canActivate: [RoleGuard]
     },
     {
         path: 'category/:categoryId',
         component: CategoryComponent,
         children: [
             {
                 path: 'subcategory/:subcategoryId',
                 component: SubcategoryComponent,
                 children: [
                     {
                         path: 'product/:productId',
                         component: ProductComponent,
                     },
                 ],
             },
         ],
     },
     {
         path: 'old-route',
         redirectTo: '/new-route',
         pathMatch: 'full'
     },
     {
         path: '**',
         component: NotFoundComponent
     }
 ];

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 export class AppRoutingModule {}