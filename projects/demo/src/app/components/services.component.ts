import { Component, OnInit } from '@angular/core';
import { ServiceGroupDto, UserServiceDto } from '../core/models';
import { Widget } from './widget.abstract';

@Component({
  selector: 'ngx-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends Widget<ServiceGroupDto> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  protected transform(data: ServiceGroupDto[]): string[] {
    return data.map(
      ({ services }: ServiceGroupDto) =>
        services.map(({ name }: UserServiceDto) => name)
    ).flat();
  }

}
