import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {Routes, RouterModule} from "@angular/router";
import {UserModule} from "./user/user.module";

const appRoutes: Routes =
  [
    {
      path:'',
      component: AppComponent
    }
  ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
