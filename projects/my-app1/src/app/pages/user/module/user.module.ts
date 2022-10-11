import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserResumeComponent} from "../components/user-resume/user-resume.component";
import {UserConsultLayoutComponent} from "../pages/consult/layout/user-consult-layout.component";
import {UserCreateLayoutComponent} from "../pages/create/layout/user-create-layout/user-create-layout.component";
import {UserUpdateLayoutComponent} from "../pages/update/layout/user-update-layout/user-update-layout.component";


@NgModule({
  declarations: [
    UserResumeComponent,
    UserConsultLayoutComponent,
    UserCreateLayoutComponent,
    UserUpdateLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
}
