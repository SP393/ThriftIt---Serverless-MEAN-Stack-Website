import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HomeComponent } from './home/home.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AllProductComponent } from './all-product/all-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AddTypesComponent } from './add-types/add-types.component';
import { AllTypesComponent } from './all-types/all-types.component';
const routes: Routes = [{path: 'Home' ,component:HomeComponent},
{path: 'Add/Category' ,component:AddCategoryComponent },
{path: 'All/Category' ,component:AllCategoriesComponent},
{path: 'Edit/Category/5fd5bf88ca3b2312647986f6' ,component:EditCategoryComponent},
{path: 'All/Product' ,component:AllProductComponent},
{path: 'Add/Product' ,component:AddProductComponent},
{path: 'Admin/Area' ,component:AdminAreaComponent},
{path: 'All/Types' ,component:AllTypesComponent },
{path: 'Add/Types' ,component:AddTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
