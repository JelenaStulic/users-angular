import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users$?: Observable<User[]>;

  ngOnInit() {
    this.usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((res) => {
        this.users$ = of(res);
      });
  }
}
