import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../section-title/section-title.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-timeline-section',
  imports: [
    SectionTitleComponent,
    TimelineComponent
  ],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.scss'
})
export class TimelineSectionComponent {

}
