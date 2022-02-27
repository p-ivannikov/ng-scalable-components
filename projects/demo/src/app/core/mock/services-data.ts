import { ServiceGroupDto } from '../models';

export const mockServicesData: ServiceGroupDto[] = [
  {
    id: 'a00a3888-77cb-46ec-8138-3cba754d958d',
    groupName: 'Social',
    services: [
      {
        id: '82c44ef1-b957-41bc-95e8-069a8ef341a2',
        name: 'YouTube',
        link: 'https://www.youtube.com'
      },
      {
        id: '79fd1a2a-5485-4908-a9da-a0d92953e838',
        name: 'Instagram',
        link: 'https://www.instagram.com'
      },
      {
        id: '38e166ae-084e-4c31-9970-42812d4bbf26',
        name: 'VK',
        link: 'https://vk.com'
      }
    ]
  },
  {
    id: 'd4a370db-edbb-4638-a966-c57b2209b203',
    groupName: 'Search',
    services: [
      {
        id: '41fb0a76-36ce-4653-afa4-9dc2e619c3ca',
        name: 'Yandex',
        link: 'https://www.ya.ru'
      },
      {
        id: '0127212b-d4b2-4dcc-a408-4cb0671cb645',
        name: 'Google',
        link: 'https://www.google.com'
      }
    ]
  }
];
