import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Auth } from '@models/auth.model';

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
    return this.http.get(`${this.BASE_URl}/profile`, { headers: { 'Authorization': `Bearer ${token}` } })
  }
}
