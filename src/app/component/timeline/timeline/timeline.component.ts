import { Component } from '@angular/core';
import { TimelinePeriod, educationPeriods, workPeriods } from '../../../utils/TimelinePeriodsDefinitions';
import { TimelineWorkPeriodComponent } from '../timeline-period/timeline-work-period/timeline-work-period.component';
import { TimelineEducationPeriodComponent } from "../timeline-period/timeline-education-period/timeline-education-period.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [
    TimelineWorkPeriodComponent,
    TimelineEducationPeriodComponent,
    NgClass
],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  from: number = 2019
  to: number = (new Date()).getFullYear()
  years?: number[]
  timelineWidth: string = '90dvw'

  workPeriods = workPeriods
  educationPeriods = educationPeriods

  ngOnInit() {
    this.years = []
    let tmp = this.from
    do {
      this.years?.push(tmp)
      tmp++
    } while (tmp <= this.to)
  }

  getYearWidth(): string {
    return `calc(${this.timelineWidth} / ${this.years?.length})`
  }

  getLeftShiftByTimelinePeriod(timelinePeriod: TimelinePeriod) {
    let start = new Date(this.from, 0, 1)
    let daysBetweenDates = this.daysBetweenDates(start, timelinePeriod.from)
    return `calc(${daysBetweenDates/365} * ${this.getYearWidth()})`
  }

  getWidthByTimelinePeriod(timelinePeriod: TimelinePeriod) {
    let daysBetweenDates = this.daysBetweenDates(timelinePeriod.from, timelinePeriod.to ? timelinePeriod.to : new Date())
    return `calc(${daysBetweenDates/365} * ${this.getYearWidth()})`
  }

  daysBetweenDates(first: Date, second: Date) {        
    return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
  }

}
