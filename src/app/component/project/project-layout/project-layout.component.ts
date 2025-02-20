import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectStore } from '../../../state/ProjectStore';
import { ColorsPerProjectDefinition } from '../../../utils/ColorsPerProjectDefinition';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-project-layout',
  imports: [
    NgStyle,
    TechnologiesComponent
  ],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss',
  providers: [ProjectStore]
})
export class ProjectLayoutComponent {

  @Input() projectTitle?: "illchess" | "leon" | "inbox-outbox" | "CV"
  @Input() technologies: string[] = []

  hover = false

  getColorDefinition() {
    return this.projectTitle ? ColorsPerProjectDefinition.getColorByProjectByTransparency(this.projectTitle) : 'white'
  }
}
