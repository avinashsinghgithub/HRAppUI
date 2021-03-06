import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlueBackgroundDirective } from './directives/myfirstdirective';
import { ChildComponent } from './child-first/child.first.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsComponent } from './brands/brands.component';
import { ConfigService } from './service/config.service';
import { EmployeesComponent } from './Employees/employees.component';
import { EmployeeService } from './service/employee.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { JobsComponent } from './Jobs/jobs.component';
import { JobService } from './service/job.service';
@NgModule({
  declarations: [
    AppComponent,
    BlueBackgroundDirective,
    ChildComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    BrandsComponent,
    EmployeesComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    AppRoutingModule
  ],
  providers: [ConfigService,EmployeeService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
