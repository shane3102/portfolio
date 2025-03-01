import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsSectionComponent } from './component/project/projects-section/projects-section.component';
import { TimelineSectionComponent } from './component/timeline/timeline-section/timeline-section.component';
import { MainInfoSectionComponent } from './component/main-info/main-info-section/main-info-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProjectsSectionComponent,
    TimelineSectionComponent,
    MainInfoSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
