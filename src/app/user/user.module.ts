import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRootComponent } from './user-root/user-root.component';
import { UserComponent } from './user/user.component';
import {Routes, RouterModule} from "@angular/router";
import { UserHeaderComponent } from './user-header/user-header.component';
import {UserService} from "./user.service";
import { ListUsersComponent } from './list-users/list-users.component';
import {ListUserPostComponent} from "./list-user-post/list-user-post.component";


const routes: Routes = [
  {
    path: 'user', component: UserRootComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent
      },
      {
        path: ':id',
        component: UserComponent,
      },
      {
        path:':id/posts',
        component: ListUserPostComponent
      }

    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    UserService
  ],
  exports:[
    UserRootComponent
  ],
  declarations: [UserRootComponent, UserComponent, UserHeaderComponent, ListUsersComponent, ListUserPostComponent]
})
export class UserModule { }
