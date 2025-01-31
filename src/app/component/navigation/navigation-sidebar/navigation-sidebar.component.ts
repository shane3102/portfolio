import { Component, inject, signal } from '@angular/core';
import { GlobalStore } from '../../../state/GlobalStore';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {

  globalState = inject(GlobalStore)

  hover = signal(false)

  changeShownContent(shownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV') {
    this.globalState.changeShownContent(shownContent)
  }
}
