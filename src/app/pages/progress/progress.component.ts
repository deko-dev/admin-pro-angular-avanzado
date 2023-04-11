import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progressOne: number = 50;
  progressTwo: number = 50;


  get getPercentOne() {
    return `${this.progressOne}%`;
  }

  get getPercentTwo() {
    return `${this.progressTwo}%`;
  }
}
