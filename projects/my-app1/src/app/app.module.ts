import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateUserLayoutComponent } from './pages/user/pages/create/layout/create-user-layout.component';
import { UpdateUserLayoutComponent } from './pages/user/pages/update/layout/update-user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CreateUserLayoutComponent,
    UpdateUserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
