import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {App1InputComponent} from "../../components/app1-input/app1-input.component";


@NgModule({
  declarations: [App1InputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    App1InputComponent
  ]
})
export class SharedModule {
}
