import { Component } from '@angular/core';
import { ProjectLayoutComponent } from '../project-layout/project-layout.component';
import { SectionTitleComponent } from '../../section-title/section-title.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectLayoutComponent,
    SectionTitleComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
