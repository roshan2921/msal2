import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private calendar: CallapiService) { }

  ngOnInit(): void {
  }

  callCalendar() {
    this.calendar.getCalendarEvents().subscribe((resp) => {
      console.log(resp);
    })
  }

}
