import { Component, Input, inject } from '@angular/core';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';
import { ProjectStore } from '../../../state/ProjectStore';
import { technology } from '../../../utils/GlobalDefinitions';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.scss'
})
export class TechnologyChipComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  @Input() name?: technology

  projectStore = inject(ProjectStore)

  changeHighlightedTechnology() {
    this.projectStore.changeHighlightedTechnology(this.name)
  }
}
