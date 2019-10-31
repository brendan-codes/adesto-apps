import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private data: CountService) { }

  count: any;
  counters = [];

  ngOnInit() {
    this.data.count.subscribe((count) => {
      this.count = count;
    });
  }



  add() {
    this.data.updateCount(this.count + 1);
  }

  subtract() {
    this.data.updateCount(this.count - 1);
  }

  reset() {
    this.data.updateCount(0);
  }

  createCounter() {
    this.counters.push(this.counters.length);
  }

  resetCounters() {
    this.counters = [];
  }

}
