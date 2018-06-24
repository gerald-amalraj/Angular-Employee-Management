import { EmployeeAddComponent } from './../employee/add/employee-add.component';
import { EmployeeListComponent } from './../employee/list/employee-list.component';
 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes , Router} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
 })


 export class HomeComponent implements OnInit {
    active: string;
    constructor(private router: Router, private toastr: ToastrService) {
        // Detect route changes for active sidebar menu
         this.router.events.subscribe((val) => {
         this.routeChanged(val);
        });
    }

    ngOnInit() {

    }

// Detect route changes for active sidebar menu
     routeChanged(val) {
        this.active = val.url;
     }

 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
 },
 {
    path: 'add',
    component: EmployeeAddComponent
 },
 {
    path: 'update/:id',
    component: EmployeeAddComponent
},
 ];

