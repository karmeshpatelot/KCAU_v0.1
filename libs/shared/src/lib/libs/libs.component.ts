import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'lib-libs',
  standalone: true,
  imports: [CommonModule,FullCalendarModule],
  templateUrl: './libs.component.html',
  styleUrl: './libs.component.css',
})
export class LibsComponent {

  @Input() events   : any
  @Input() options : any

  showData : boolean = false

  constructor(){
    setTimeout(() => {
      this.showData = true  
    }, 100); 
  }
}
