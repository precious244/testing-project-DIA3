import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getFruits(): Observable<any> {
    return of('apple', 'orange', 'grape');
  }
}
