import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Image',
    imageUrl: '/assets/bad_image_1.jpeg',
    isActive: false,
    isGoodImage: false,
  }),
  new Project({
    id: 2,
    name: 'Image1',
    imageUrl: '/assets/bad_image_2.jpeg',
    isActive: true,
    isGoodImage: false,
  }),
  new Project({
    id: 3,
    name: 'Image2',
    imageUrl: '/assets/bad_image_3.jpeg',
    isActive: true,
    isGoodImage: false,
  }),
  new Project({
    id: 4,
    name: 'Image3',
    imageUrl: '/assets/bad_image_4.jpeg',
    isActive: true,
    isGoodImage: false,
  }),
  new Project({
    id: 5,
    name: 'Image4',
    imageUrl: '/assets/good_image_1.jpeg',
    isActive: true,
    isGoodImage: true,
  }),
  new Project({
    id: 6,
    name: 'Image5',
    imageUrl: '/assets/good_image_2.jpeg',
    isActive: true,
    isGoodImage: true,
  }),
  new Project({
    id: 7,
    name: 'Image6',
    imageUrl: '/assets/good_image_3.jpeg',
    isActive: true,
    isGoodImage: true,
  }),
];