import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { MyCounterComponent } from './my-counter/my-counter.component';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductComponent } from './product/product.component';
import {RouterLink, RouterOutlet, RouterModule} from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent, MyCounterComponent, CategoryComponent, SubcategoryComponent, ProductComponent, AdminComponent, NotFoundComponent
  ],
    imports: [
        BrowserModule, AppRoutingModule, RouterOutlet, RouterLink, RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
