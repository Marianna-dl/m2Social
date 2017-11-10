import {Component, OnInit, Input} from '@angular/core';
import {Subscription} from "rxjs";
import "rxjs/add/operator/switchMap";
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private service:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.service.getUser(+params.get('id'));
      })
      .subscribe(user => this.user = user);
  }

}
