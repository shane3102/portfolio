import { Component, inject } from '@angular/core';
import { GlobalStore } from '../../state/GlobalStore';

@Component({
  selector: 'app-project-description-layout',
  imports: [],
  templateUrl: './project-description-layout.component.html',
  styleUrl: './project-description-layout.component.scss'
})
export class ProjectDescriptionLayoutComponent {

  globalState = inject(GlobalStore)

}
