import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  template: ''
})
export abstract class Widget<T extends object> implements OnChanges {
  @Input() data: T[] = [];
  @Input() hideable: boolean = false;

  hide: boolean = false;
  list: string[] = [];

  constructor() { }

  ngOnChanges({ data }: SimpleChanges): void {
    if( !!data && data.currentValue != null) {
      this.list = this.transform(this.data)
    }
  }

  toggle(): void {
    this.hide = !this.hide;
  }

  protected abstract transform(data: T[]): string[];
}
