import { Component } from '@angular/core';
import { ProjectLayoutComponent } from '../project-layout/project-layout.component';
import { SectionTitleComponent } from '../../section-title/section-title.component';

@Component({
  selector: 'app-projects-section',
  imports: [
    ProjectLayoutComponent,
    SectionTitleComponent
  ],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

}
