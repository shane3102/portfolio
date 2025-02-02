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
}
