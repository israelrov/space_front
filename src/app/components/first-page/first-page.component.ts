import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-first-page',
    standalone: true,
    templateUrl: './first-page.component.html',
    styleUrl: './first-page.component.css',
    imports: [HeaderComponent, SidebarComponent ,AppComponent]
})
export class FirstPageComponent {

}
