import { Component, inject, signal } from '@angular/core';
import { GlobalStore } from '../../../state/GlobalStore';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { colorDefinitions } from '../../../utils/ColorsPerProjectDefinition';
import { NaigationSeparatorComponent } from '../naigation-separator/naigation-separator.component';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [
    NavigationButtonComponent,
    NaigationSeparatorComponent
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
    let foundColor = colorDefinitions.get(this.globalState.currentShownContent())

    return  foundColor ? foundColor : 'white'

  }
}
