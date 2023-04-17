import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { MyCounterComponent } from './my-counter/my-counter.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MyCounterComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
