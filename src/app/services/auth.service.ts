import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Auth } from '@models/auth.model';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private readonly BASE_URl = 'https://api.escuelajs.co/api/v1/auth'

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.BASE_URl}/login`, { email, password })
  }

  profile(token: string) {
    // const headers = new HttpHeaders()
    // headers.set('Authorization', `Bearer ${token}`)
    return this.http.get<User>(`${this.BASE_URl}/profile`, { headers: { 'Authorization': `Bearer ${token}` } })

    // return this.http.get<User>(`${this.BASE_URl}/profile`, { headers })
  }
}
