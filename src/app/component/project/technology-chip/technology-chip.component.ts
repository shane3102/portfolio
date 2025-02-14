import { Component, Input } from '@angular/core';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.scss'
})
export class TechnologyChipComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  @Input() name?: string
}
