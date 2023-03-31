import {Component, OnDestroy, OnInit} from '@angular/core';
import {OnChanges} from '@angular/core';
import {Input} from '@angular/core'; // First, import Input
import {timer} from 'rxjs';
import {tap, map, takeWhile} from 'rxjs/operators';
import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input("answerTime") answerTime: number;

  @Output()
  timeCounter = new EventEmitter<number>();

  subscription: any;

  ngOnInit() {
    this.answerTime = this.answerTime == null ? 30 : this.answerTime;
    this.subscription = timer(this.answerTime, 1000)
      .pipe(takeWhile(() => this.answerTime > 0),
        map(i => this.answerTime--))
      .subscribe(answerTime => {
        if (answerTime == 1) {
          this.timeCounter.emit(0)
        }
      })
  }

}
