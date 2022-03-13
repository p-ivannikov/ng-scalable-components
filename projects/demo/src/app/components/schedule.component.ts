import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserScheduleDto } from '../core/models';
import { Widget } from './widget.abstract';

@Component({
  selector: 'ngx-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent extends Widget<UserScheduleDto> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  protected transform(data: UserScheduleDto[]): string[] {
    return data.map(
      ({value}: UserScheduleDto) => value
    );
  }

}
