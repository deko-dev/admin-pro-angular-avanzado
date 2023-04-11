import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  @Input() progress: number = 40;

  @Output() outValue: EventEmitter<number> = new EventEmitter<number>();

  changePercent( value: number ): any {
    if( this.progress >= 100 && value >= 0 ) {
      this.outValue.emit( 100 );
      return this.progress = 100;
    }

    if( this.progress <= 0 &&  value < 0 ) {
      this.outValue.emit( 0 );
      return this.progress = 0;
    }

    this.progress += value;
    this.outValue.emit( this.progress );
  }

}
