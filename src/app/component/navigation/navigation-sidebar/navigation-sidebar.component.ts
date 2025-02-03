import { Component, inject } from '@angular/core';
import { GlobalStore } from '../../../state/GlobalStore';
import { ColorsPerProjectDefinition } from '../../../utils/ColorsPerProjectDefinition';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { NavigationSeparatorComponent } from '../navigation-separator/navigation-separator.component';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [
    NavigationButtonComponent,
    NavigationSeparatorComponent
  ],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {

  globalState = inject(GlobalStore)

  changeShownContent(shownContent: 'illchess' | 'leon' | 'inbox-outbox' | 'CV') {
    this.globalState.changeShownContent(shownContent)
  }

  getBackgroundColorByShownContent(): string {

    if (this.globalState.changingContent()) {
      return 'white'
    }
    let foundColor = ColorsPerProjectDefinition.getColorByProjectByTransparency(
      this.globalState.currentShownContent(),
      0.63
    )

    return foundColor ? foundColor : 'white'

  }
}
