import {Component} from '@angular/core';
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
export class TimerComponent implements OnChanges {

  @Input("answerTime") answerTime: number;

  @Output()
  timeCounter = new EventEmitter<number>();

  ngOnChanges() {

    this.answerTime = this.answerTime == null ? 30 : this.answerTime;
    timer(10, 1000)
      .pipe(takeWhile(() => this.answerTime > 0),
        map(i => this.answerTime--))
      .subscribe(answerTime => {
        if (answerTime == 1)
          this.timeCounter.emit(0)
      })
  }

}
