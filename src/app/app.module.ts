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
@NgModule({
  declarations: [
    AppComponent,
    BlueBackgroundDirective,
    ChildComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    BrandsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConfigService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
