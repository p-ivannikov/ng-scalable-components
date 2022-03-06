import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserScheduleDto } from '../core/models';

@Component({
  selector: 'ngx-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {

  @Input() schedule: UserScheduleDto[] | null = null;
  @Input() hideable: boolean = false;

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.hide = !this.hide;
  }

}
