import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'one',
  },
  {
    path: 'one',
    loadChildren: () =>
      import('./section-one/section-one.module').then(
        (m) => m.SectionOneModule
      ),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./section-two/section-two.module').then(
        (m) => m.SectionTwoModule
      ),
  },
  {
    path: 'three',
    loadChildren: () =>
      import('./section-three/section-three.module').then(
        (m) => m.SectionThreeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
