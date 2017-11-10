import {Component, OnInit, Input} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})


export class UserHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
