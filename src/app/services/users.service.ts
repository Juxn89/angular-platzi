import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateUserDto, User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/users/'

  create(user: CreateUserDto) {
    return this.http.post<User>(this.BASE_URL, user)
  }

  getAll() {
    return this.http.get<User[]>(this.BASE_URL)
  }
}
