import { Component, Input } from '@angular/core';
import { project } from '../../../utils/GlobalDefinitions';
import { LinkInfo, ProjectDataDefinitions } from '../../../utils/ProjectDataDefinitions';

type lol = "illchess" | "leon" | "inbox-outbox" | "CV"

@Component({
  selector: 'app-project-links',
  imports: [],
  templateUrl: './project-links.component.html',
  styleUrl: './project-links.component.scss'
})
export class ProjectLinksComponent {

  ProjectDataDefinitions = ProjectDataDefinitions

  @Input() projectLinks?: LinkInfo[]

}
