import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.scss'
})
export class TechnologyChipComponent {

  @Input() name?: string
  @Input() imagePath?: string

}
