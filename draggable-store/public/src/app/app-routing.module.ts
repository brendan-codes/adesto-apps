import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'products', component: IndexComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id/edit', component: EditComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
