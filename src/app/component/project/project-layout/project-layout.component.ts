import { Component, Input } from '@angular/core';
import { ColorsPerProjectDefinition } from '../../../utils/ColorsPerProjectDefinition';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-project-layout',
  imports: [NgStyle],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss'
})
export class ProjectLayoutComponent {

  @Input() projectTitle?: "illchess" | "leon" | "inbox-outbox" | "CV"

  hover = false

  getColorDefinition() {
    return this.projectTitle ? ColorsPerProjectDefinition.getColorByProjectByTransparency(this.projectTitle) : 'white'
  }
}
