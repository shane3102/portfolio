import { Component, inject } from '@angular/core';
import { GlobalStore } from '../../state/GlobalStore';
import { LeonDescriptionComponent } from '../leon/leon-description/leon-description.component';
import { IllchessDescriptionComponent } from '../illchess/illchess-description/illchess-description.component';
import { InboxOutboxDescriptionComponent } from '../inbox-outbox/inbox-outbox-description/inbox-outbox-description.component';

@Component({
  selector: 'app-project-description-layout',
  imports: [
    LeonDescriptionComponent,
    IllchessDescriptionComponent,
    InboxOutboxDescriptionComponent
  ],
  templateUrl: './project-description-layout.component.html',
  styleUrl: './project-description-layout.component.scss'
})
export class ProjectDescriptionLayoutComponent {

  globalState = inject(GlobalStore)

}
