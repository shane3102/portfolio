import { Component, Input, inject } from '@angular/core';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';
import { ProjectStore } from '../../../state/ProjectStore';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.scss'
})
export class TechnologyChipComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  @Input() name?: string

  projectStore = inject(ProjectStore)

  changeHighlightedTechnology() {
    if (this.name != (this.projectStore.highlightedTechnology ? this.projectStore.highlightedTechnology(): undefined)) {
      this.projectStore.changeHighlightedTechnology(this.name)
    } else {
      this.projectStore.changeHighlightedTechnology(undefined)
    }
  }
}
