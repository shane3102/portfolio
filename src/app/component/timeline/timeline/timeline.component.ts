import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  from: number = 2019
  to: number = (new Date()).getFullYear()
  years?: number[]

  ngOnInit() {
    this.years = []
    let tmp = this.from
    do {
      this.years?.push(tmp)
      tmp++
    } while (tmp - 1 <= this.to)
  }

  getYearWidth(): string {
    return `calc(100dvw / ${this.years?.length} - 4em)`
  }

}
