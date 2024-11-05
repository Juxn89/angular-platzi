import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private document = inject(DOCUMENT)

  saveToken(token: string) {
    this.document.defaultView?.localStorage?.setItem('token', token)
  }

  getToken(){
    return this.document.defaultView?.localStorage?.getItem('token')
  }
}
