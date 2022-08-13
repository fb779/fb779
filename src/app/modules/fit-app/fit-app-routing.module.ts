import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitAppComponent } from '@fit-app/components/fit-app/fit-app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FitAppComponent,
  //   children: [
  //     {
  //       path: 'auth',
  //       loadChildren: () =>
  //         import('@fit-app/auth/auth.module').then((m) => m.AuthModule),
  //     },
  //     {
  //       path: 'training',
  //       loadChildren: () =>
  //         import('@fit-app/training/training.module').then(
  //           (m) => m.TrainingModule
  //         ),
  //     },
  //     { path: '**', redirectTo: 'auth', pathMatch: 'Full' },
  //   ],
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('@fit-app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('@fit-app/training/training.module').then((m) => m.TrainingModule),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'Full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitAppRoutingModule {}
