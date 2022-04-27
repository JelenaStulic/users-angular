import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://gorest.co.in/public/v2/users')
  }

  getUser(id: number){
    return this.getUsers().pipe(
      map((users: User[])=> users.find(user => user.id === +id))
    )
  }

  // getUser(id: number | string) {
  //   return this.getUsers().pipe(
  //     map((user: User[]) => user.find((user) => user.id === +id)!)
  //   );
  // }
}
