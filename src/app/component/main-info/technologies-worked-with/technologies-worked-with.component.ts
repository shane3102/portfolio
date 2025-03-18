import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ProjectStore } from '../../../state/ProjectStore';
import { technology } from '../../../utils/GlobalDefinitions';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';
import { TechnologyChipComponent } from '../../project/technology-chip/technology-chip.component';

@Component({
  selector: 'app-technologies-worked-with',
  imports: [
    TechnologyChipComponent,
    NgClass
  ],
  templateUrl: './technologies-worked-with.component.html',
  styleUrl: './technologies-worked-with.component.scss',
  providers: [ProjectStore]
})
export class TechnologiesWorkedWithComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  highlightedTechnologyPosition: number = 0

  @Input() titleWithInfo: string = ""
  @Input() technologies: technology[] = []

  projectStore = inject(ProjectStore)

  changeHighlightedTechnology(name: technology | undefined, index: number) {
    this.projectStore.changeHighlightedTechnology(name)
    this.highlightedTechnologyPosition = index
  }
}
