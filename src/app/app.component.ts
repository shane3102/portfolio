import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationSidebarComponent } from './component/navigation/navigation-sidebar/navigation-sidebar.component';
import { ProjectDescriptionLayoutComponent } from './component/project-description-layout/project-description-layout.component';
import { ProjectLayoutComponent } from './component/project/project-layout/project-layout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProjectDescriptionLayoutComponent,
    NavigationSidebarComponent,
    ProjectLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
