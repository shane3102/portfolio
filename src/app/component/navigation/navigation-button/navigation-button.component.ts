import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {

  @Input() text: string = ""

}
