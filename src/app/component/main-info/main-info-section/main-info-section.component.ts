import { Component } from '@angular/core';
import { technology } from '../../../utils/GlobalDefinitions';
import { ExternalPageLinkComponent } from '../external-page-link/external-page-link.component';
import { TechnologiesWorkedWithComponent } from '../technologies-worked-with/technologies-worked-with.component';

@Component({
  selector: 'app-main-info-section',
  imports: [
    ExternalPageLinkComponent,
    TechnologiesWorkedWithComponent
  ],
  templateUrl: './main-info-section.component.html',
  styleUrl: './main-info-section.component.scss'
})
export class MainInfoSectionComponent {

  imageSource: string = "/photos/photo.jpg"
  loaded: boolean = false

  commonTechnologies: technology[] = ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Kafka']
  hadExperienceTechnologies: technology[] = ['Kotlin', 'Quarkus', 'Redis', 'RabbitMQ', 'Angular', 'Typescript', 'MySql']

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
