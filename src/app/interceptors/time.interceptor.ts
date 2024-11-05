import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const timeInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
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
