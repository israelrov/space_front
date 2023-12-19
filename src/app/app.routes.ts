import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BackgroundPageComponent } from './components/background-page/background-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ErrorComponent } from './components/error/error.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [

    { path: "", component: FirstPageComponent, pathMatch: 'full' },
    {
        path: "main", component:MainComponent,
        children: [
            {path: "",component:BackgroundPageComponent},
            {path: "customers", component: CustomersComponent },    
                            
        ],
    },
    { path: "**", component: ErrorComponent }
];



