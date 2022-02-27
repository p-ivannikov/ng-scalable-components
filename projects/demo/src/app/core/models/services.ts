export interface UserServiceDto {
  id: string;
  name: string;
  link: string;
}

export interface ServiceGroupDto {
  id: string;
  groupName: string;
  services: UserServiceDto[];
}
