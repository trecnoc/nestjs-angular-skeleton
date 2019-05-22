import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleMessageComponent } from './components/sample-message/sample-message.component';

const routes: Routes = [
  {
    path: 'sample',
    component: SampleMessageComponent,
  },
  {
    path: '**',
    redirectTo: '/sample'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
