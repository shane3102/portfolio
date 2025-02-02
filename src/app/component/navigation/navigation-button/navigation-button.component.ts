import { Component, Input, Output } from '@angular/core';
import { colorDefinitions } from '../../../utils/ColorsPerProjectDefinition';

@Component({
  selector: 'app-navigation-button',
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {

  @Input() text: string = ""

  getColorDefinition() {
    return colorDefinitions.get(this.text)
  }

}
