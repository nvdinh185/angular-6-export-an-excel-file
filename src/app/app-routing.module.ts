import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'down-up-excel', pathMatch: 'full' },
  {
    path: 'down-up-excel',
    loadChildren: () => import('./down-up-excel/down-up-excel.module').then( m => m.DownUpExcelPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
