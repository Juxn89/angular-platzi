import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

import { TokenService } from '@services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  req = addToken(req)
  return next(req);
};

const addToken = (request: HttpRequest<unknown>) => {
  const tokenService = inject(TokenService)

  const token = tokenService.getToken()

  if(token) {
    const authRequest = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    })

    return authRequest
  }

  return request
}
