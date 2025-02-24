import { Component } from '@angular/core';
import { TimelineWorkPeriodComponent } from '../timeline-work-period/timeline-work-period.component';
import { TimelinePeriod, periods } from '../../../utils/TimelinePeriodsDefinitions';

@Component({
  selector: 'app-timeline',
  imports: [
    TimelineWorkPeriodComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  from: number = 2019
  to: number = (new Date()).getFullYear()
  years?: number[]

  periods = periods

  ngOnInit() {
    this.years = []
    let tmp = this.from
    do {
      this.years?.push(tmp)
      tmp++
    } while (tmp - 1 <= this.to)
  }

  getYearWidth(): string {
    return `calc(100dvw / ${this.years?.length} - 4em)`
  }

  getWholeYearWidth(): string {
    return `calc(100dvw / ${this.years?.length} - 2em)`
  }

  getLeftShiftByTimelinePeriod(timelinePeriod: TimelinePeriod) {
    let start = new Date(this.from, 0, 1)
    let daysBetweenDates = this.daysBetweenDates(start, timelinePeriod.from)
    return `calc(${daysBetweenDates/365} * ${this.getWholeYearWidth()})`
  }

  getWidthByTimelinePeriod(timelinePeriod: TimelinePeriod) {
    let daysBetweenDates = this.daysBetweenDates(timelinePeriod.from, timelinePeriod.to ? timelinePeriod.to : new Date())
    return `calc(${daysBetweenDates/365} * ${this.getWholeYearWidth()})`
  }

  daysBetweenDates(first: Date, second: Date) {        
    return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
  }

}
