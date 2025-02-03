import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-separator',
  imports: [],
  templateUrl: './navigation-separator.component.html',
  styleUrl: './navigation-separator.component.scss'
})
export class NavigationSeparatorComponent {

  @Input() title?: string = undefined

}
