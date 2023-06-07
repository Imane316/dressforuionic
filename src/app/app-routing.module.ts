import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'dresses',
    loadChildren: () => import('./dress-list/dress-list.module').then( m => m.DressListPageModule)
  },
  {
    path: 'dressdetail/:iddress',
    loadChildren: () => import('./dressdetail/dressdetail.module').then( m => m.DressdetailPageModule)
  },
  {
    path: 'categorydetail/:idcategory',
    loadChildren: () => import('./categorydetail/categorydetail.module').then( m => m.CategorydetailPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'adddress',
    loadChildren: () => import('./add-dress/add-dress.module').then( m => m.AddDressPageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'updatedress/:iddress',
    loadChildren: () => import('./updatedress/updatedress.module').then( m => m.UpdatedressPageModule)
  },
  {
    path: 'updatecategory/:idcategory',
    loadChildren: () => import('./updatecategory/updatecategory.module').then( m => m.UpdatecategoryPageModule)
  },
  {
    path: 'dressdetail',
    loadChildren: () => import('./dressdetail/dressdetail.module').then( m => m.DressdetailPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
