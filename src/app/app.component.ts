import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalStore } from './state/GlobalStore';
import { ProjectDescriptionLayoutComponent } from './component/project-description-layout/project-description-layout.component';
import { NavigationSidebarComponent } from './component/navigation/navigation-sidebar/navigation-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProjectDescriptionLayoutComponent,
    NavigationSidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  globalState = inject(GlobalStore)

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
