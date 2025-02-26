import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-period-info',
  imports: [],
  templateUrl: './timeline-period-info.component.html',
  styleUrl: './timeline-period-info.component.scss'
})
export class TimelinePeriodInfoComponent {

  @Input() width: string = ""
}
