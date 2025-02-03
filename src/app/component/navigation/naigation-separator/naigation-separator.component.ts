import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-naigation-separator',
  imports: [],
  templateUrl: './naigation-separator.component.html',
  styleUrl: './naigation-separator.component.scss'
})
export class NaigationSeparatorComponent {

  @Input() title?: string = undefined

}
