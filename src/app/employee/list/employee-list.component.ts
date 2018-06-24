 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { EmployeeService } from '../../services/employee/employee.service';

 @Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
 })

 export class EmployeeListComponent implements OnInit {
    employeeList: any;
    employeeListData: any;
    constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }
    // Call employee list function on page load
    ngOnInit() {
      this.getEmployeeList();
    }

    // Get employee list from services
    getEmployeeList() {
        const employeeList = this.employeeService.getAllEmployees();
        console.log('====> ', employeeList);
        this.success(employeeList);
    }

    // Get employee list success
    success(data) {
        this.employeeListData = data.data;
        console.log('====$> ', this.employeeListData);
        for (let i = 0; i < this.employeeListData.length; i++) {
            this.employeeListData[i].name = this.employeeListData[i].first_name + ' ' + this.employeeListData[i].last_name;
        }
     }

     deleteEmployee(index: number) {
         // get confirm box for confirmation
        const r = confirm('Are you sure?');
        if (r === true) {
           const employeeDelete = this.employeeService.deleteEmployee(index);
             if (employeeDelete) {
                this.toastr.success('Success', 'Employee Deleted');
            }
            this.getEmployeeList();
        }
    }

  }

