import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateUserLayoutComponent } from './pages/user/pages/create/layout/create-user-layout.component';
import { UpdateUserLayoutComponent } from './pages/user/pages/update/layout/update-user-layout.component';
import { UserConsultComponent } from './pages/user/pages/consult/layout/user-consult/user-consult.component';
import { UserConsultLayoutComponent } from './pages/user/pages/consult/layout/user-consult-layout/user-consult-layout.component';
import { UserCreateLayoutComponent } from './pages/user/pages/create/layout/user-create-layout/user-create-layout.component';
import { UserUpdateLayoutComponent } from './pages/user/pages/update/layout/user-update-layout/user-update-layout.component';
import { UserInformationsComponent } from './pages/user/pages/consult/components/user-informations/user-informations.component';
import { UserResumeComponent } from './pages/user/components/user-resume/user-resume.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CreateUserLayoutComponent,
    UpdateUserLayoutComponent,
    UserConsultComponent,
    UserConsultLayoutComponent,
    UserCreateLayoutComponent,
    UserUpdateLayoutComponent,
    UserInformationsComponent,
    UserResumeComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
