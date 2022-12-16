import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = new Subject<any>();
  // userName = new BehaviorSubject<any>('Rahul');
  constructor(private http: HttpClient) {}
}
