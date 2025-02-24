import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-work-period',
  imports: [],
  templateUrl: './timeline-work-period.component.html',
  styleUrl: './timeline-work-period.component.scss'
})
export class TimelineWorkPeriodComponent {
  @Input() wholeWidth?: string

  getWidthOfOneSection() {
    return `calc(${this.wholeWidth} / 4)`
  }
}
