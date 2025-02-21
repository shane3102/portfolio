import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectStore } from '../../../state/ProjectStore';
import { ColorsPerProjectDefinitions } from '../../../utils/ColorsPerProjectDefinitions';
import { project, technology } from '../../../utils/GlobalDefinitions';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectLinksComponent } from '../project-links/project-links.component';

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

  @Input() projectTitle?: project
  @Input() shortProjectDescription: string = "DODAJ OPIS"
  @Input() technologies: technology[] = []

  hover = false

  getColorDefinition() {
    return this.projectTitle ? ColorsPerProjectDefinitions.getColorByProjectByTransparency(this.projectTitle) : 'white'
  }
}
