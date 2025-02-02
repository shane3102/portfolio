import { Component, inject, signal } from '@angular/core';
import { GlobalStore } from '../../../state/GlobalStore';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [
    NavigationButtonComponent
  ],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {

  globalState = inject(GlobalStore)

  hover = signal(false)

  changeShownContent(shownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV') {
    this.globalState.changeShownContent(shownContent)
  }

  getBackgroundColorByShownContent(): string {

    if (this.globalState.changingContent()) {
      return 'white'
    }

    switch (this.globalState.currentShownContent()) {
      case 'CV':
        return '#808080a1'
      case 'illchess':
        return '#964b00a1'
      case 'leon':
        return '#baff39a1'
      case 'inbox-outbox':
        return '#add8e6a1'
    }
  }
}
