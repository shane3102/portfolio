import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './component/project/projects/projects.component';
import { TimelineSectionComponent } from './component/timeline/timeline-section/timeline-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProjectsComponent,
    TimelineSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
