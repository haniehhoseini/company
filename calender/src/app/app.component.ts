import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DatePipe } from '@angular/common';
import { PersionNumberPipe } from './persion-number.pipe';
import { ThreePipe } from './three.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FullCalendarModule , DatePipe , PersionNumberPipe , ThreePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calender';
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    locale: 'fa',
    direction: 'rtl',
    displayEventTime: false,
    navLinks: false,
    events: [
      { title: 'هیچی والا', start: new Date() }
    ]
  };

  persion = '2213432134678';
}
