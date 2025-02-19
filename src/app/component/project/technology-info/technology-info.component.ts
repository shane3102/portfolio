import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-technology-info',
  imports: [
    CommonModule
  ],
  templateUrl: './technology-info.component.html',
  styleUrl: './technology-info.component.scss'
})
export class TechnologyInfoComponent {

  technology = input<string | undefined>()
  isTechnologyChanged = input<boolean>()

}
