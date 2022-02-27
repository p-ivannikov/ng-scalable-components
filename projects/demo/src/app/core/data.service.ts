import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { mockScheduleData, mockServicesData } from './mock';
import { ServiceGroupDto, UserScheduleDto } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _schedule$$: BehaviorSubject<UserScheduleDto[]>;
  private readonly _services$$: BehaviorSubject<ServiceGroupDto[]>;

  get schedule$(): Observable<UserScheduleDto[]> {
    return this._schedule$$.asObservable();
  }

  get services$(): Observable<ServiceGroupDto[]> {
    return this._services$$.asObservable();
  }

  constructor() {
    this._schedule$$ = new BehaviorSubject(mockScheduleData)
    this._services$$ = new BehaviorSubject(mockServicesData)
  }

  getUserServices(): Observable<ServiceGroupDto[]> {
    return this.services$;
  }

  getUserSchedule(): Observable<UserScheduleDto[]> {
    return this.schedule$;
  }

}
