import { Component } from '@angular/core';

@Component({
  selector: 'app-main-info',
  imports: [],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.scss'
})
export class MainInfoComponent {

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
