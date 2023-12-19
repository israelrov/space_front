import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomersComponent } from '../customers/customers.component';
// import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-background-page',
    standalone: true,
    templateUrl: './background-page.component.html',
    styleUrl: './background-page.component.css',
    imports: [HeaderComponent,SidebarComponent,CustomersComponent,RouterModule]
})
export class BackgroundPageComponent {

}
