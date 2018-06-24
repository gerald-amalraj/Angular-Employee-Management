import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management';

  employeeList = [
{
  id : 1,
  first_name : "Gerald",
  last_name : "Amalraj",
  email : "jgerald.a@hcl.com",
  phone : "9940284518",
  department : "IT"
},
{
  id : 2,
  first_name : "Roderick",
  last_name : "Cassian",
  email : "ricky.cassian@hcl.com",
  phone : "9940284519",
  department : "Kinder"
},
{
  id : 3,
  first_name : "Virgin",
  last_name : "Ignatius",
  email : "ignatius.v@hcl.com",
  phone : "9940284517",
  department : "English"
},
{
  id : 4,
  first_name : "Riohanna",
  last_name : "Juliete",
  email : "Rio.Julus@hcl.com",
  phone : "9940284515",
  department : "Toddler"
},
{
  id : 5,
  first_name : "Jenifer",
  last_name : "Mercy",
  email : "Jenni.Merc@hcl.com",
  phone : "9940284514",
  department : "Devops"
}
  ];
  constructor() {
    localStorage.setItem('employees', JSON.stringify(this.employeeList));

   
  }
}
