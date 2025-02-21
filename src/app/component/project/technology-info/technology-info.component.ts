import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TechnologiesDefinitions } from '../../../utils/TechnologiesDefinitions';
import { technology } from '../../../utils/GlobalDefinitions';

@Component({
  selector: 'app-technology-info',
  imports: [
    CommonModule
  ],
  templateUrl: './technology-info.component.html',
  styleUrl: './technology-info.component.scss'
})
export class TechnologyInfoComponent {

  TechnologiesDefinitions = TechnologiesDefinitions

  technology = input<technology | undefined>()
  isTechnologyChanged = input<boolean>()

}
