import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { EcommerceIdComponent } from './pages/ecommerce-id/ecommerce-id.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    // use this for sub route
    // children: [
    //   {
    //     path: ':id',
    //     component: EcommerceIdComponent,
    //   },
    // ],
  },
  // use this for separate route
  { path: 'ecommerce/:id', component: EcommerceIdComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
