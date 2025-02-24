import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './component/project/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
