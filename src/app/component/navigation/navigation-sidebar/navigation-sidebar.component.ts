import { Component, inject } from '@angular/core';
import { GlobalStore } from '../../../state/GlobalStore';
import { ColorsPerProjectDefinitions } from '../../../utils/ColorsPerProjectDefinitions';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { NavigationSeparatorComponent } from '../navigation-separator/navigation-separator.component';
import { NgStyle } from '@angular/common';
import { project } from '../../../utils/GlobalDefinitions';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [
    NavigationButtonComponent,
    NavigationSeparatorComponent,
    NgStyle
  ],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.scss'
})
export class NavigationSidebarComponent {

  globalState = inject(GlobalStore)

  changeShownContent(shownContent: project) {
    this.globalState.changeShownContent(shownContent)
  }

  getBackgroundColorByShownContent(): string {

    if (this.globalState.changingContent()) {
      return 'white'
    }
    let foundColor = ColorsPerProjectDefinitions.getColorByProjectByTransparency(
      this.globalState.currentShownContent(),
      0.63
    )

    return foundColor ? foundColor : 'white'

  }
}
