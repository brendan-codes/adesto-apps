import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  constructor(private session: CountService) { }

  currentCount;
  oldCount = null;

  ngOnInit() {
    this.session.count.subscribe(data => {
      this.currentCount = data;



      if (this.oldCount === null) {
        this.oldCount = data;
      }
    });

  }

  ngOnDestroy() {
    this.session.count.unsubscribe();
  }

  mouseUpEvent(data) {
    console.log(data.style.transform);
    console.log(data);
  }

}
