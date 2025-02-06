import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorsPerProjectDefinition } from '../../../utils/ColorsPerProjectDefinition';

@Component({
  selector: 'app-navigation-button',
  imports: [NgStyle],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {

  @Input() text?: 'illchess' | 'leon' | 'inbox-outbox' | 'CV' = undefined

  hover = false

  getColorDefinition() {
    return this.text ? ColorsPerProjectDefinition.getColorByProjectByTransparency(this.text) : 'white'
  }

}
