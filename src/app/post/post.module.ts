import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { HeaderPostComponent } from './header-post/header-post.component';
import {Routes, RouterModule} from "@angular/router";
import { PostRootComponent } from './post-root/post-root.component';
import {PostService} from "./post.service";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: 'post', component: PostRootComponent,
    children: [
      {
        path: 'list',
        component: ListPostsComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports:[
    PostRootComponent
  ],
  providers:[
    PostService
  ],
  declarations: [ListPostsComponent, HeaderPostComponent, PostRootComponent]
})
export class PostModule { }
