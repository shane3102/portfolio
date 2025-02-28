import { Component } from '@angular/core';
import { ExternalPageLinkComponent } from '../external-page-link/external-page-link.component';

@Component({
  selector: 'app-main-info-section',
  imports: [
    ExternalPageLinkComponent
  ],
  templateUrl: './main-info-section.component.html',
  styleUrl: './main-info-section.component.scss'
})
export class MainInfoSectionComponent {

  imageSource: string = "/photos/photo.jpg"
  loaded: boolean = false

  ngOnInit() {
    let img = new Image()
    img.onload = () => {
      this.markAsLoaded()
    }
    img.src = this.imageSource
  }

  markAsLoaded() {
    this.loaded = true
  }

}
