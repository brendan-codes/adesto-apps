import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { RowComponent } from './row/row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewComponent,
    EditComponent,
    NotFoundComponent,
    ProductComponent,
    RowComponent,
    WrapperComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [
    HttpService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
