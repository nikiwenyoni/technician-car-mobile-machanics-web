import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [

  {path: '', component : LoginComponent },
  {path: 'register', component : RegisterComponent },
  {path: 'login', component : LoginComponent },
  {path: 'home', component : HomeComponent },
  {path: 'notifications', component : NotificationsComponent },
  {path: 'edit-profile', component : ViewProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
