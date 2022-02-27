import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './core';
import { ServiceGroupDto, UserScheduleDto } from './core/models';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  readonly userServices$: Observable<ServiceGroupDto[]>;
  readonly userSchedule$: Observable<UserScheduleDto[]>

  constructor(
    private readonly dataService: DataService
  ) {
    this.userServices$ = this.dataService.getUserServices();
    this.userSchedule$ = this.dataService.getUserSchedule();
  }
}
