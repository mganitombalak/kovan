import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeimdallGuard } from './modules/auth/guards/heimdall.guard';
const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', canActivate: [HeimdallGuard], canActivateChild: [HeimdallGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'category',
        canLoad: [HeimdallGuard],
        loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'unit',
        canLoad: [HeimdallGuard], loadChildren: () => import('./modules/unit/unit.module').then(m => m.UnitModule)
      }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

