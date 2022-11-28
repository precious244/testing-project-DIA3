import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/core/layouts/admin/admin.module').then((x) => x.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/core/layouts/front/front.module').then((x) => x.FrontModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('../app/module/verif/verif.module').then((x) => x.VerifModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../app/module/forgot-password/forgot-password.module').then((x) => x.ForgotPasswordModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('../app/module/change-password/change-password.module').then((x) => x.ChangePasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
