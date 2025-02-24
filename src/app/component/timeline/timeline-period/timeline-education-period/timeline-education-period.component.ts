import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-education-period',
  imports: [],
  templateUrl: './timeline-education-period.component.html',
  styleUrl: './timeline-education-period.component.scss'
})
export class TimelineEducationPeriodComponent {
  @Input() wholeWidth?: string

  getWidthOfOneSection() {
    return `calc(${this.wholeWidth} / 4)`
  }
}
