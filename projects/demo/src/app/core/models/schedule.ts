export type ScheduleItemType = 'GENERAL' | 'OTHER';

export interface UserScheduleDto {
  value: string;
  type: ScheduleItemType;
  id: string;
}

