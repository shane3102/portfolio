import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {
  hover = signal(false)
}
