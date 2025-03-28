import { Component, Input, output } from '@angular/core';
import { technology } from '../../../utils/GlobalDefinitions';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.scss'
})
export class TechnologyChipComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  @Input() name!: technology

  hovered = output<technology>()
}
