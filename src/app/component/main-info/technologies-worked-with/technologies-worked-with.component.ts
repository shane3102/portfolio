import { Component, inject, Input } from '@angular/core';
import { ProjectStore } from '../../../state/ProjectStore';
import { technology } from '../../../utils/GlobalDefinitions';
import { TechnologyChipComponent } from '../../project/technology-chip/technology-chip.component';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';

@Component({
  selector: 'app-technologies-worked-with',
  imports: [
    TechnologyChipComponent
  ],
  templateUrl: './technologies-worked-with.component.html',
  styleUrl: './technologies-worked-with.component.scss',
  providers: [ProjectStore]
})
export class TechnologiesWorkedWithComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  @Input() titleWithInfo: string = ""
  @Input() technologies: technology[] = []

  projectStore = inject(ProjectStore)

  clearHighlightedTechnology() {
    this.projectStore.changeHighlightedTechnology(undefined)
  }
}
