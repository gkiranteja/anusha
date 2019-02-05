import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule,Router} from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { UserhomeComponent } from 'src/app/userhome/userhome.component';

const routes:Routes=[
{path :'',redirectTo:'register',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'user',component:UserhomeComponent}


];
@NgModule({
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
