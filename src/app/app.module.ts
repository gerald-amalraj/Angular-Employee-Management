import { EmployeeAddComponent } from './employee/add/employee-add.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeeListComponent } from './employee/list/employee-list.component';

import { HomeComponent, homeChildRoutes } from './home/home.component';
import { HighlightEmployeeDirective } from './directives/highlight-employee.directive';
import { EmployeeService } from './services/employee/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './index/app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children : homeChildRoutes
  }
  ];
  @NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    HighlightEmployeeDirective,
    EmployeeListComponent,
    EmployeeAddComponent
    ],
    imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
