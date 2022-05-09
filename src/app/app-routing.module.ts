import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopbridgeComponent } from './shopbridge/shopbridge.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login' , component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'shopbridge', component: ShopbridgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
