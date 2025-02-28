import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-external-page-link',
  imports: [],
  templateUrl: './external-page-link.component.html',
  styleUrl: './external-page-link.component.scss'
})
export class ExternalPageLinkComponent {

  @Input() name: string = ""
  @Input() image: string = ""
  @Input() externalLink: string = ""

}
