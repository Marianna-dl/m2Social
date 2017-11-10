import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[];

  constructor(private service:UserService) { }

  ngOnInit() {

    this.service.getAllUsers().subscribe( users => this.users = users );
  }

}
