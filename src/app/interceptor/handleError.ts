import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
         this.handleError()
        }
        return throwError(error);
      })
    );
  }
  handleError(){
    Swal.fire({
        title: 'This is an error in the server , please Reload the page',
        icon: 'error',
        confirmButtonText: 'Refresh',
      }).then((result) => {
        if (result.value) {
            window.location.reload();
        }
    })}

}
