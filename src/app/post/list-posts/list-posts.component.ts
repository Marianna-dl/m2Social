import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  @Input() post: Post;
  posts: Post[];

  constructor(private service:PostService) { }

  ngOnInit() {

    this.service.getAllPosts().subscribe( posts => this.posts = posts );
  }

}
