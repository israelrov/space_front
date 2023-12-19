import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CustomersComponent } from '../customers/customers.component';


@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HeaderComponent, SidebarComponent,RouterModule]
})
export class MainComponent {

}
