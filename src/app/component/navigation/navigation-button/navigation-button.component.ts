import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsPerProjectDefinitions } from '../../../utils/ColorsPerProjectDefinitions';
import { project } from '../../../utils/GlobalDefinitions';

@Component({
  selector: 'app-navigation-button',
  imports: [NgStyle],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {

  @Input() text?: project = undefined

  hover = false

  getColorDefinition() {
    return this.text ? ColorsPerProjectDefinitions.getColorByProjectByTransparency(this.text) : 'white'
  }

}
