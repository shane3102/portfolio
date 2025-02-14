import { Component, Input, Signal, signal } from '@angular/core';
import { TechnologyChipComponent } from '../technology-chip/technology-chip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [
    TechnologyChipComponent,
    CommonModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  @Input() technologies: string[] = []

  hovering: boolean = false
  fixedChipNumber = 6
  currentShift = signal(0)
  decreasing = false;

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

  getClassByShift() {
    return `technology-chips-${this.currentShift()}`
  }

}
