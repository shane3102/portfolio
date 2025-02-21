import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { TechnologyChipComponent } from '../technology-chip/technology-chip.component';
import { ProjectStore } from '../../../state/ProjectStore';
import { TechnologyInfoComponent } from '../technology-info/technology-info.component';
import { technology } from '../../../utils/GlobalDefinitions';

@Component({
  selector: 'app-technologies',
  imports: [
    TechnologyChipComponent,
    TechnologyInfoComponent,
    CommonModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  @Input() technologies: technology[] = []

  hovering: boolean = false
  fixedChipNumber = 6
  currentShift = signal(0)
  decreasing = false;

  projectStore = inject(ProjectStore)

  ngOnInit() {
    setInterval(
      () => {
        if (this.hovering != true && this.technologies.length > this.fixedChipNumber) {
          if (this.currentShift() == this.technologies.length - this.fixedChipNumber && !this.decreasing) {
            this.decreasing = true
          } else if (this.currentShift() == 0 && this.decreasing) {
            this.decreasing = false
          } else {
            this.currentShift.update(it => it = this.decreasing ? it - 1 : it + 1)
          }
        }
      },
      500
    )
  }

  next() {
    if (this.currentShift() < this.technologies.length - this.fixedChipNumber) {
      this.currentShift.update(it => it + 1)
    }
  }

  previous() {
    if (this.currentShift() > 0) {
      this.currentShift.update(it => it - 1)
    }
  }

  getClassByShift() {
    return `technology-chips-${this.currentShift()}`
  }

  clearHighlightedTechnology() {
    this.projectStore.changeHighlightedTechnology(undefined)
  }

}
