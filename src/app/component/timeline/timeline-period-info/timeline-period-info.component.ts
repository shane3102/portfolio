import { Component, Input } from '@angular/core';
import { TimelinePeriod } from '../../../utils/TimelinePeriodsDefinitions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline-period-info',
  imports: [
    DatePipe
  ],
  templateUrl: './timeline-period-info.component.html',
  styleUrl: './timeline-period-info.component.scss'
})
export class TimelinePeriodInfoComponent {

  @Input() width: string = ""
  @Input() timelinePeriod!: TimelinePeriod

}
