
 import { Injectable } from '@angular/core';

 @Injectable()
export class EmployeeService {
    constructor() {}

    getAllEmployees() {
        let employeeList: any;
        if (localStorage.getItem('employees') && localStorage.getItem('employees') !== '') {
            employeeList = {
                code : 200,
                message : 'Employee List fetched successfully',
                data : JSON.parse(localStorage.getItem('employees'))
            };
        }else {
            employeeList = {
                code : 200,
                message : 'Employee List fetched successfully',
                data : JSON.parse(localStorage.getItem('employees'))
            };
        }
        return employeeList;
    }

    doRegisterEmployee(data, index){
        const employeeList = JSON.parse(localStorage.getItem('employees'));
        let returnData;
        if (index != null) {
          for (let i = 0; i < employeeList.length; i++) {
            if (index != i && employeeList[i].email === data.email) {
              returnData = {
                code : 503,
                message : 'Email Address Already In Use',
                data : null
              };
              return returnData;
            }
          }
          employeeList[index] = data;
          localStorage.setItem('employees', JSON.stringify(employeeList));
          returnData = {
            code : 200,
            message : 'Employee Successfully Updated',
            data : JSON.parse(localStorage.getItem('employees'))
          };
        }else {
          data.id = this.generateRandomID();
          for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].email === data.email) {
              returnData = {
                code : 503,
                message : 'Email Address Already In Use',
                data : null
              };
              return returnData;
            }
          }
          employeeList.unshift(data);
          localStorage.setItem('employees', JSON.stringify(employeeList));
          returnData = {
            code : 200,
            message : 'Employee Successfully Added',
            data : JSON.parse(localStorage.getItem('employees'))
          };
        }
        return returnData;
      }

      getEmployeeDetails(index: number) {
        const employeeList = JSON.parse(localStorage.getItem('employees'));
        const returnData = {
          code : 200,
          message : 'Employee Details Fetched',
          employeeData : employeeList[index]
        };
        return returnData;
      }

      deleteEmployee(index: number) {
        const employeeList = JSON.parse(localStorage.getItem('employees'));
        employeeList.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(employeeList));
        const returnData = {
          code : 200,
          message : 'Employee Successfully Deleted',
          data : JSON.parse(localStorage.getItem('employees'))
        };
        return returnData;
      }

      generateRandomID() {
        const x = Math.floor((Math.random() * Math.random() * 9999));
        return x;
      }
}
