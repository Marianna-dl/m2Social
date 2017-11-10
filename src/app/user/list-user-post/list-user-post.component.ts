import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Post} from "../../post/post";
import {ParamMap, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-user-post',
  templateUrl: './list-user-post.component.html',
  styleUrls: ['./list-user-post.component.css']
})
export class ListUserPostComponent implements OnInit {

  posts: Post[];

  constructor(private service:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.service.getUserPosts(+params.get('id'));
      })
      .subscribe(posts => this.posts = posts);
  }

}
