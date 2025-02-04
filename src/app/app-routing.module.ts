import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';

const routes: Routes = [
  {path: "", redirectTo: "sign-in", pathMatch: "full"},
  {path: "sign-in", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
