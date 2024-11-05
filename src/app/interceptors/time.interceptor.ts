import { Observable, tap } from 'rxjs';
import { HttpContext, HttpContextToken, HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';

const CHECK_TIME = new HttpContextToken<boolean>(() => false)

export const checkTime = () => {
  return new HttpContext().set(CHECK_TIME, true)
}

export const timeInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  if(!req.context.get(CHECK_TIME))
    return next(req);

  const timeStart = performance.now()
  return next(req).pipe(
    tap((event) => {
      if(event.type === HttpEventType.Response) {
        const timeEnd = (performance.now() - timeStart) + 'ms'
        console.log(req.url, timeEnd)
      }
    })
  )
};
