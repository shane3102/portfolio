import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectStore } from '../../../state/ProjectStore';
import { ColorsPerProjectDefinitions } from '../../../utils/ColorsPerProjectDefinitions';
import { project } from '../../../utils/GlobalDefinitions';
import { ProjectDataDefinitions } from '../../../utils/ProjectDataDefinitions';
import { ProjectLinksComponent } from '../project-links/project-links.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-project-layout',
  imports: [
    NgStyle,
    TechnologiesComponent,
    ProjectLinksComponent
  ],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss',
  providers: [ProjectStore]
})
export class ProjectLayoutComponent {

  ProjectDataDefinitions = ProjectDataDefinitions

  @Input() projectTitle?: project

  hover = false

  getColorDefinition() {
    return this.projectTitle ? ColorsPerProjectDefinitions.getColorByProjectByTransparency(this.projectTitle) : 'white'
  }
}
