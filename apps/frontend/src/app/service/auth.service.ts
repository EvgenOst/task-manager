import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(true);

  public get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
