import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { OverviewComponent } from './home/solutions/overview/overview.component';
import { TestimonalsComponent } from 'src/app/home/clients/testimonals/testimonals.component';
import { ContactComponent } from 'src/app/home/contact/contact.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
        
       { path: "", component: OverviewComponent},
       {path:"testimonals",component:TestimonalsComponent},
       {path:"contact",component:ContactComponent}

]
export const approute: ModuleWithProviders = RouterModule.forRoot(routes);