import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountService {

  count: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor() {
  }

  updateCount(data) {
    this.count.next(data);
  }
}
